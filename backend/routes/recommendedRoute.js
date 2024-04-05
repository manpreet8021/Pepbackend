import express from 'express';
import { getRecommendedCities } from '../controller/admin/cityController.js';

const router = express.Router()

router.route('/city').get(getRecommendedCities)

export default router;