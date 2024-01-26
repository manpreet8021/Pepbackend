import express from 'express';
import { getCountry, addCountry, updateCountry, deleteCountry } from '../../controller/admin/countryController.js';
import { upload } from '../../middleware/multerMiddleware.js';

const router = express.Router()

router.route('/').get(getCountry)
router.route('/').post(upload.single('logo'), addCountry)
router.route('/:id').put((req, res, next) => {
    if (req.body.imageUpdated != false) {
      console.log("here")
      upload.single('logo')(req, res, next);
    } else {
      next();
    }
  }, updateCountry)
router.route('/:id').delete(deleteCountry)

export default router