import express from 'express';
import { createOrder, paymentVerified } from '../../controller/paymentController.js';

const router = express.Router()

router.route('/createOrder').post(createOrder)
router.route('/paymentVerified').post(paymentVerified)

export default router