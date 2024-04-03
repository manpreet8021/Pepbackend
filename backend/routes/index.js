import express from 'express';
import auth from './authRoutes.js'
import recommended from './recommendedRoute.js'
import { adminProtect } from '../middleware/authMiddleware.js';
import adminRoutes from './admin/index.js'
import commonRoutes from './common/index.js'

const router = express.Router();

router.use('/auth', auth)
router.use('/recommended', recommended)
router.use('/admin', adminProtect, adminRoutes)
router.use('/common', commonRoutes)

export default router