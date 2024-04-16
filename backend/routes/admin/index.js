import express from 'express';
import cityRoutes from './cityRoutes.js';
import countryRoutes from './countryRoutes.js';
import lookUpRoutes from './lookUpRoutes.js';

const router = express.Router();

router.use('/city', cityRoutes)
router.use('/country', countryRoutes)
router.use('/lookup', lookUpRoutes)
router.use('/blog', lookUpRoutes)

export default router