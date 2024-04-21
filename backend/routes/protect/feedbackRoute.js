import express from 'express';
import { addFeedback, getFeedback } from '../../controller/feedbackController.js';
import { upload } from '../../middleware/multerMiddleware.js';

const router = express.Router()

router.route('/:id').get(getFeedback)
router.route('/').post(upload.array('images', 5), addFeedback)

export default router