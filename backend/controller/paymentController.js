import asyncHandler from "../middleware/asyncHandler.js";
import Razorpay from "razorpay";

const razorpayInstance = new Razorpay({
    key_id: process.env.RAZORPAY,
    key_secret: process.env.RAZORPAY_SECRET
});

const createOrder = asyncHandler(async(req, res) => {
    
    const options = {
        amount: 100 * 100,
        currency: 'INR',
        receipt: 'receipt#1',
        payment_capture: 1
    };

    try {
        const response = await razorpayInstance.orders.create(options);
        res.json(response);
    } catch (error) {
        res.status(400).json({ error: error.message });
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