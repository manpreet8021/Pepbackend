import express from 'express';
import { login, register, getUserInfo, logout, googleLogin, getUserDetail, updateUserDetail } from '../controller/authController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router()

router.route('/login').post(login)
router.route('/register').post(register)
router.route('/auth').get(protect, getUserInfo)
router.route('/getUserDetail').get(protect, getUserDetail)
router.route('/updateUserDetail').put(protect, updateUserDetail)
router.route('/logout').post(protect, logout)
router.route('/google').post(googleLogin)

export default router;