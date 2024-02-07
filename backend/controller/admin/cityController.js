import Joi from "joi"
import asyncHandler from "../../middleware/asyncHandler.js"
import { getCities, saveCity } from "../../models/cityModel.js"
import { uploadMultipleImages } from "../../helpers/imageUpload.js";

const addCitySchema = Joi.object({
    country: Joi.string().required(),
    name: Joi.string().required(),
    active: Joi.boolean().required()
})

const getCity = asyncHandler(async(req, res) => {
    const cities = await getCities();
    res.status(200).json(cities)
})

const addCity = asyncHandler(async(req, res) => {
    const { error } = addCitySchema.validate({name: req.body.name, active: req.body.active, country: req.body.country}, {abortEarly: false})

    if(error) {
        res.status(400)
        throw new Error(error.message)
    }
    
    if(!req.files) {
        res.status(400)
        throw new Error("Failed to upload image")
    }

    const uploadedImage = await uploadMultipleImages(req.files, 'city')

    if(uploadedImage.length) {
        const { name, active, country } = req.body
        const city = await saveCity({name, active, images: uploadedImage, country});
        
        if(city) {
            res.status(201).json(city);
        } else {
            res.status(400)
            throw new Error("City validation failed")
        }
    } else {
        res.status(400)
        throw new Error("Failed uploading the image")
    }
})

const updateCity = asyncHandler(async(req, res) => {

})

const deleteCity = asyncHandler(async(req, res) => {

})

export { getCity, addCity, updateCity, deleteCity }