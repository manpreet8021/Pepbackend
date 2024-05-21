import express from 'express';
import { getCityByParams } from '../../controller/cityController.js';
import { getCountryByParams } from '../../controller/countryController.js';
import { getLookUpValueByType } from '../../controller/lookupController.js';
import { getRetreatByParameter, getRetreatDetailById, getRetreatDetailForBooking } from '../../controller/retreatController.js';

const router = express.Router();

router.route('/city').get(getCityByParams)
router.route('/country').get(getCountryByParams)
router.route('/lookup/:id').get(getLookUpValueByType)
router.route('/retreat/:id').get(getRetreatDetailById)
router.route('/retreat/').post(getRetreatByParameter)
router.route('/booking').post(getRetreatDetailForBooking)

export default router