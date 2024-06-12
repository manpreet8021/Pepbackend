import express from 'express';
import { getAllFavorite, getInvoiceDetailForBooking, getUserBooking, updateFavorite } from '../../controller/userController.js';

const router = express.Router()

router.route('/booking').get(getUserBooking)
router.route('/favorite').get(getAllFavorite)
router.route('/favorite/').post(updateFavorite)
router.route('/invoice/:id').get(getInvoiceDetailForBooking)

export default router