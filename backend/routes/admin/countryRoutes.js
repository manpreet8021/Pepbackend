import express from 'express';
import { getCountry, addCountry, updateCountry, deleteCountry } from '../../controller/admin/countryController.js';
import { upload } from '../../middleware/multerMiddleware.js';

const router = express.Router()

router.route('/').get(getCountry)
router.route('/').post(upload.single('logo'), addCountry)
router.route('/:id').put(updateCountry)
router.route('/:id').delete(deleteCountry)

export default router