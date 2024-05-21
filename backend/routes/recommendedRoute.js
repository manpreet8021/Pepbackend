import express from 'express';
import { getRecommendedCities } from '../controller/cityController.js';
import { getRecommendedRetreat } from '../controller/retreatController.js';

const router = express.Router()

router.route('/city').get(getRecommendedCities)
router.route('/retreat').get(getRecommendedRetreat)

export default router;