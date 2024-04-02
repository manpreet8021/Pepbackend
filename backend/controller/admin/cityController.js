import Joi from "joi"
import asyncHandler from "../../middleware/asyncHandler.js"
import { getCities, saveCity, getCityById, updateCityById, getAllCities } from "../../models/cityModel.js"
import { imageUpload, deleteImageFromCloudinary } from "../../helpers/imageUpload.js";

const addCitySchema = Joi.object({
    country: Joi.string().pattern(/^[0-9a-fA-F]{24}$/).required(),
    name: Joi.string().required(),
    active: Joi.boolean().required(),
    recommended: Joi.boolean().required()
})

const updateCitySchema = Joi.object({
    id: Joi.string().pattern(/^[0-9a-fA-F]{24}$/).required(),
    country: Joi.string().pattern(/^[0-9a-fA-F]{24}$/).required(),
    name: Joi.string().required(),
    active: Joi.boolean().required(),
    recommended: Joi.boolean().required()
})

const getCity = asyncHandler(async(req, res) => {
    const cities = await getCities();
    res.status(200).json(cities)
})

const getAllCity = asyncHandler(async(req, res) => {
    const cities = await getAllCities();
    res.status(200).json(cities)
})

const addCity = asyncHandler(async(req, res) => {
    const { error } = addCitySchema.validate({name: req.body.name, active: req.body.active, country: req.body.country, recommended: req.body.recommended}, {abortEarly: false})

    if(error) {
        res.status(400)
        throw new Error(error.message)
    }
    
    if(!req.file) {
        res.status(400)
        throw new Error("Failed to upload image")
    }

    const uploadedImage = await imageUpload(req.file.path, 'city')

    if(uploadedImage) {
        const { name, active, country, recommended } = req.body
        const city = await saveCity({name, active, images: uploadedImage, country, recommended});
        
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
    const { error } = updateCitySchema.validate({id: req.params.id, name: req.body.name, active: req.body.active, country: req.body.country, recommended: req.body.recommended}, {abortEarly: false})

    if(error) {
        res.status(400)
        throw new Error(error.message)
    }

    const existingCity = await getCityById(req.params.id)

    const { name, active, country, recommended } = req.body

    existingCity.name = name;
    existingCity.active = active;
    existingCity.country = country;
    existingCity.recommended = recommended;
    
    if(existingCity) {
        if(req.body.imageUpdated !== 'false') {
            if(!req.file) {
                res.status(400)
                throw new Error("Failed to upload image")
            }
            const uploadedImage = await imageUpload(req.file.path, 'city')
            await deleteImageFromCloudinary(existingCity.images.public_id)
            existingCity.images = uploadedImage;
        }

        const city = await updateCityById(req.params.id, existingCity);

        if(city) {
            res.status(201).json(city);
        } else {
            res.status(400)
            throw new Error("City validation failed")
        }
    } else {
        res.status(400)
        throw new Error("No Data Found")
    }
})

const deleteCity = asyncHandler(async(req, res) => {

})

export { getCity, addCity, updateCity, deleteCity, getAllCity }