import express from 'express';
import cityRoutes from './cityRoutes.js';
import countryRoutes from './countryRoutes.js';
import retreatRoutes from './retreatRoute.js';
import lookUpRoutes from './lookUpRoutes.js';

const router = express.Router();

router.use('/city', cityRoutes)
router.use('/country', countryRoutes)
router.use('/retreat', retreatRoutes)
router.use('/lookup', lookUpRoutes)

export default router