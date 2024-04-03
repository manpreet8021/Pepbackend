import express from 'express';
import { getCityByParams } from '../../controller/admin/cityController.js';
import { getCountryByParams } from '../../controller/admin/countryController.js';

const router = express.Router();

router.use('/city', getCityByParams)
router.use('/country', getCountryByParams)

export default router