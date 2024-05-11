import Joi from "joi";
import asyncHandler from "../middleware/asyncHandler.js";
import Razorpay from "razorpay";
import { getRetreatDetailForBookingTable } from "../models/retreatModel.js";
import { createPaymentLog } from "../models/paymentLogModel.js";
import moment from "moment";

const razorpayInstance = new Razorpay({
    key_id: process.env.RAZORPAY,
    key_secret: process.env.RAZORPAY_SECRET
});

const bookingRetreatSchema = Joi.object({
    retreatId: Joi.string().pattern(/^[0-9a-fA-F]{24}$/).required(),
    roomId: Joi.string().pattern(/^[0-9a-fA-F]{24}$/),
    inDate: Joi.required(),
    outDate: Joi.required(),
    adult: Joi.number().positive().min(1).required(),
    children: Joi.number().min(0)
})

const createOrder = asyncHandler(async(req, res) => {
    try {
        const {error} = bookingRetreatSchema.validate(req.body)
    
        if(error) {
            res.status(400)
            throw new Error("Data is not valid")
        }

        let {inDate, outDate, adult, retreatId, roomId} = req.body
        inDate = new Date(moment(inDate).utcOffset(0).startOf("day").toISOString())
        outDate = new Date(moment(outDate).utcOffset(0).startOf("day").toISOString())

        const detail = await getRetreatDetailForBookingTable({ retreatId, inDate, outDate, roomId })

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
            
            await createPaymentLog({user: req.user._id, status: 'intialize', orderId: JSON.stringify(response), retreat: retreatId, amount: amount, reciept: receipt})
            res.status(200).json(response)
        } else {
            throw new Error("Retreat not found for added settings")
        }
    } catch(error) {
        console.log(error)
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
        if (payment && payment.order_id === razorpay_order_id && payment.status === 'captured') {
            res.json({ success: true });
        } else {
            res.status(400).json({ error: 'Payment verification failed' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})

export { createOrder, paymentVerified }