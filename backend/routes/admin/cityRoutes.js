import express from 'express';
import { addCity, deleteCity, getCity, updateCity } from '../../controller/cityController.js';
import { upload } from '../../middleware/multerMiddleware.js';

const router = express.Router()

router.route('/').get(getCity)
router.route('/').post(upload.single('images'), addCity)
router.route('/:id').put(upload.single('images'), updateCity)
router.route('/:id').delete(deleteCity)

export default router