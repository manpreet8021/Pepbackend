import express from 'express';
import { getLookUpDatas, getLookUpValues, addLookUpData, addLookUpValue, getRetreatValue } from '../../controller/admin/lookupController.js';

const router = express.Router()

router.route('/data').get(getLookUpDatas)
router.route('/value').get(getLookUpValues)
router.route('/data/').post(addLookUpData)
router.route('/value/').post(addLookUpValue)
router.route('/retreat').get(getRetreatValue)

export default router