import express from 'express';
import { getLookUpValueByType, getLookUpDatas, getLookUpValues, addLookUpData, addLookUpValue } from '../../controller/admin/lookupController.js';

const router = express.Router()

router.route('/data').get(getLookUpDatas)
router.route('/value').get(getLookUpValues)
router.route('/valueparams/:id').get(getLookUpValueByType)
router.route('/data/').post(addLookUpData)
router.route('/value/').post(addLookUpValue)

export default router