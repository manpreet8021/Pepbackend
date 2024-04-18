import express from 'express';
import { getCityByParams } from '../../controller/admin/cityController.js';
import { getCountryByParams } from '../../controller/admin/countryController.js';
import { getLookUpValueByType } from '../../controller/admin/lookupController.js';
import { getRetreatByParameter, getRetreatDetailById } from '../../controller/admin/retreatController.js';

const router = express.Router();

router.route('/city').get(getCityByParams)
router.route('/country').get(getCountryByParams)
router.route('/lookup/:id').get(getLookUpValueByType)
router.route('/retreat/:id').get(getRetreatDetailById)
router.route('/retreat/').post(getRetreatByParameter)

export default router