import Joi from "joi";
import asyncHandler from "../middleware/asyncHandler.js";
import Razorpay from "razorpay";
import { createPaymentLog } from "../models/paymentLogModel.js";
import { commonRetreatDetail } from "./admin/retreatController.js";
import { createBooking, getBookingByOrderId, getBookings, updateBookingById } from "../models/bookingModel.js";
import { createBulkUserForBooking } from "../models/bookingUserModel.js";
import { updateUserById } from "../models/userModel.js";

const razorpayInstance = new Razorpay({
    key_id: process.env.RAZORPAY,
    key_secret: process.env.RAZORPAY_SECRET
});

const userSchema = Joi.object({
    name: Joi.string().required(),
    gender: Joi.string().required(),
    age: Joi.string().required()
})

const paymentOrderSchema = Joi.object({
    retreatId: Joi.string().pattern(/^[0-9a-fA-F]{24}$/).required(),
    roomId: Joi.string().pattern(/^[0-9a-fA-F]{24}$/),
    inDate: Joi.required(),
    outDate: Joi.required(),
    adult: Joi.number().positive().min(1).required(),
    children: Joi.number().min(0),
    country: Joi.string().required(),
    email: Joi.string().required(),
    line1: Joi.string().required(),
    line2: Joi.string().allow(''),
    name: Joi.string().required(),
    phone: Joi.string().required(),
    state: Joi.string().required(),
    request: Joi.string().allow(''),
    users: Joi.array().items(userSchema)
})

const createOrder = asyncHandler(async(req, res) => {
    try {
        const {error} = paymentOrderSchema.validate(req.body)

        if(error) {
            res.status(400)
            throw new Error("Data is not valid")
        }

        const {inDate, outDate, adult, retreatId, roomId, users, phone, line1, line2, state, country, request} = req.body
        const { detail } = await commonRetreatDetail({inDate, outDate, adult, retreatId, roomId})

        if(detail.length) {
            const finalPrice = detail[0].rooms ? detail[0].rooms : detail[0].price
            const receipt = `${req.user._id}`
            const amount = finalPrice * adult
            const options = {
                amount: amount * 100,
                currency: 'INR',
                receipt: receipt,
                payment_capture: 1
            };
            const response = await razorpayInstance.orders.create(options);
            if(response) {
                const booking = await createBooking({retreat: retreatId, room: roomId, status: 'intialize', user: req.user._id, request: request, order: response.id, price: amount})
                if(booking) {
                    req.user.address.line1 = line1;
                    req.user.address.line2 = line2;
                    req.user.address.state = state;
                    req.user.address.country = country;
                    req.user.phoneNumber = phone;

                    await updateUserById(req.user._id, req.user)
                
                    const userWithBookingId = users.map(user => {
                        return {
                            ...user,
                            booking: booking._id
                        }
                    })
                    await createBulkUserForBooking(userWithBookingId)
                    await createPaymentLog({user: req.user._id, status: 'intialize', orderId: JSON.stringify(response), retreat: retreatId, room: roomId, amount: amount, reciept: receipt})
                    res.status(200).json(response)
                } else {
                    throw new Error("Failed adding the booking information")
                }
            } else {
                throw new Error("Failed creating payment")
            }
        } else {
            throw new Error("Retreat not found for added settings")
        }
    } catch(error) {
        res.status(400)
        const message = error.message ? error.message : 'Unable to book this retreat'
        throw new Error(message)
    }
})

const paymentVerified = asyncHandler(async(req, res) => {
    try {
        const {
            razorpay_payment_id,
            razorpay_order_id,
        } = req.body;
    
        const payment = await razorpayInstance.payments.fetch(razorpay_payment_id);
        await createPaymentLog({user: req.user._id, status: payment.status==='captured' ? 'success': 'failure', orderId: JSON.stringify(payment), amount: payment.amount})
        
        if (payment && payment.order_id === razorpay_order_id) {
            const booking = await getBookings({order: payment.order_id})
            if(booking) {
                if(payment.status === 'captured') {
                    booking.status = 'success'
                    booking.method = payment.method
                }
                else
                    booking.status = 'failure'

                const updatedBooking = await updateBookingById(booking._id, booking)
                res.status(200).json(updatedBooking.bookingNumber);
            } else {
                throw new Error()
            }
        } else {
            throw new Error()
        }
    } catch (error) {
        res.status(400)
        res.json(error);
    }
})

const getBookingDetail = asyncHandler(async(req, res) => {
    try {
        const response = {}
        const detail = await getBookingByOrderId({user: req.user._id, bookingNumber: req.params.id})
        if(detail) {
            response.detail = detail
            const {address, email, phoneNumber, displayName } = req.user
            response.address = address
            response.email = email
            response.phoneNumber = phoneNumber
            response.name = displayName
            res.status(200).json(response)
        } else {
            throw new Error()
        }
    } catch (error) {
        res.status(400)
        throw new Error("Failed to get booking detail")
    }
})

export { createOrder, paymentVerified, getBookingDetail }