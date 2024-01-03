import express from 'express';
import { addCity, deleteCity, getCities, updateCity } from '../../controller/admin/cityController.js';

const router = express.Router()

router.route('/').get(getCities)
router.route('/').post(addCity)
router.route('/:id').put(updateCity)
router.route('/:id').delete(deleteCity)

export default router