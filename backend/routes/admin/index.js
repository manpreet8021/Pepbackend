import express from 'express';
import cityRoutes from './cityRoutes.js';
import countryRoutes from './countryRoutes.js';
import retreatRoutes from './retreatRoute.js';

const router = express.Router();

router.use('/city', cityRoutes)
router.use('/country', countryRoutes)
router.use('/retreat', retreatRoutes)

export default router