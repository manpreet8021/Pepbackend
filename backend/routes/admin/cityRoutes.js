import express from 'express';
import { addCity, deleteCity, getCity, updateCity } from '../../controller/admin/cityController.js';
import { upload } from '../../middleware/multerMiddleware.js';

const router = express.Router()

router.route('/').get(getCity)
router.route('/').post(upload.single('images', 5), addCity)
router.route('/:id').put(upload.single('images', 5), updateCity)
router.route('/:id').delete(deleteCity)

export default router