import express from 'express';
import { createOrder, paymentVerified, getBookingDetail } from '../../controller/paymentController.js';

const router = express.Router()

router.route('/createOrder').post(createOrder)
router.route('/paymentVerified').post(paymentVerified)
router.route('/getBookingDetail/:id').get(getBookingDetail)

export default router