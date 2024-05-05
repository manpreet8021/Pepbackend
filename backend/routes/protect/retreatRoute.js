import express from 'express';
import { upload } from '../../middleware/multerMiddleware.js';
import { addRetreat, deleteRetreat, getRetreat, updateRetreat, deleteRetreatImage, deleteRoomImage, getRetreatDetailForBooking } from '../../controller/admin/retreatController.js';

const router = express.Router()

router.route('/').get(getRetreat)
router.route('/').post(upload.fields([
        {name: 'thumbnail', maxCount: 1},
        {name: 'images', maxCount: 5},
        {name: 'rooms[0][images]', maxCount: 5},
        {name: 'rooms[1][images]', maxCount: 5},
        {name: 'rooms[2][images]', maxCount: 5},
    ]), addRetreat
)
router.route('/:id').put(upload.fields([
        {name: 'thumbnail', maxCount: 1},
        {name: 'images', maxCount: 5},
        {name: 'rooms[0][images]', maxCount: 5},
        {name: 'rooms[1][images]', maxCount: 5},
        {name: 'rooms[2][images]', maxCount: 5},
    ]), updateRetreat
)
router.route('/:id').delete(deleteRetreat)
router.route('/image/:id/:image_id').delete(deleteRetreatImage)
router.route('/room/:id/:image_id').delete(deleteRoomImage)
router.route('/booking').post(getRetreatDetailForBooking)

export default router