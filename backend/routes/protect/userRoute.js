import express from 'express';
import { getAllFavorite, getUserBooking, updateFavorite } from '../../controller/userController.js';

const router = express.Router()

router.route('/booking').get(getUserBooking)
router.route('/favorite').get(getAllFavorite)
router.route('/favorite/:id').get(updateFavorite)

export default router