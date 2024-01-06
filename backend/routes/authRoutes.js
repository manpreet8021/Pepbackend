import express from 'express';
import { login, register, getUserInfo } from '../controller/authController.js';

const router = express.Router()

router.route('/login').post(login)
router.route('/register').post(register)
router.route('/auth').get(getUserInfo)

export default router;