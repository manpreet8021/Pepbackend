import express from 'express';
import { upload } from '../../middleware/multerMiddleware.js';
import { addRetreat, deleteRetreat, getRetreat, updateRetreat } from '../../controller/admin/retreatController.js';

const router = express.Router()

router.route('/').get(getRetreat)
router.route('/').post(upload.array('images', 5), addRetreat)
router.route('/:id').put(upload.array('images', 5), updateRetreat)
router.route('/:id').delete(deleteRetreat)

export default router