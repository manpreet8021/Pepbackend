import express from 'express';
import { getUserBooking } from '../../controller/bookingController.js';

const router = express.Router()

router.route('/').get(getUserBooking)

export default router