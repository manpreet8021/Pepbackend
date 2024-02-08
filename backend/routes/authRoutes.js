import express from 'express';
import { login, register, getUserInfo, logout } from '../controller/authController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router()

router.route('/login').post(login)
router.route('/register').post(register)
router.route('/auth').get(getUserInfo)
router.route('/logout').post(protect, logout)

export default router;