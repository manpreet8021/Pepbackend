import express from 'express';
import cityRoutes from './cityRoutes.js';
import countryRoutes from './countryRoutes.js';

const router = express.Router();

router.use('/city', cityRoutes)
router.use('/country', countryRoutes)

export default router