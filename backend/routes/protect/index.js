import express from 'express';
import retreatRoutes from './retreatRoute.js';
import paymentRoutes from './paymentRoute.js';

const router = express.Router();

router.use('/retreat', retreatRoutes)
router.use('/payment', paymentRoutes)

export default router