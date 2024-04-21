import express from 'express';
import retreatRoutes from './retreatRoute.js';
import paymentRoutes from './paymentRoute.js';
import feedbackRoutes from './feedbackRoute.js';

const router = express.Router();

router.use('/retreat', retreatRoutes)
router.use('/payment', paymentRoutes)
router.use('/feedback', feedbackRoutes)

export default router