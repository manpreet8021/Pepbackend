import express from 'express';
import { upload } from '../../middleware/multerMiddleware.js';
import { addRetreat, deleteRetreat, getRetreat, updateRetreat } from '../../controller/admin/retreatController.js';

const router = express.Router()

router.route('/').get(getRetreat)
router.route('/').post(upload.fields([
    {name: 'images', maxCount: 5},
    {name: 'rooms[0][images]', maxCount: 5},
    {name: 'rooms[1][images]', maxCount: 5},
    {name: 'rooms[2][images]', maxCount: 5},
]), addRetreat)
router.route('/:id').put(upload.array('images', 5), updateRetreat)
router.route('/:id').delete(deleteRetreat)

export default router