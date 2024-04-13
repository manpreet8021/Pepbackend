import express from 'express';
import retreatRoutes from './retreatRoute.js';

const router = express.Router();

router.use('/retreat', retreatRoutes)

export default router