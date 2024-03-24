import { deleteImageFromCloudinary } from "../../helpers/imageUpload.js";
import asyncHandler from "../../middleware/asyncHandler.js";
import Joi from 'joi';

const deleteImageSchema = Joi.object({
    id: Joi.string().required(),
    image_id: Joi.string().required()
})

const deleteImage = asyncHandler(async(req, res) => {
    const { error } = deleteImageSchema.validate({ id: req.params.image_id, image_id: req.params.image_id })

    if(error) {
        res.status(400)
        throw new Error("ID is required")
    }

    const result = await deleteImageFromCloudinary(req.params.image_id)

    if(result) {
        const res = await deleteRetreatImageById(req.params.id, req.params.image_id)
        if(res) {
            res.status(201).json()
        } else {
            res.status(400)
            throw new Error("Failed deleting image for database")
        }
    } else {
        res.status(400)
        throw new Error("Failed deleting image from server")
    }
})

export { deleteImage }