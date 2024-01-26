import { imageUpload } from "../../helpers/imageUpload.js";
import asyncHandler from "../../middleware/asyncHandler.js"
import { getCountries, saveCountry, updateCountryById, getCountryById } from "../../models/countryModel.js"
import Joi from "joi";

const addCountrySchema = Joi.object({
    name: Joi.string().required(),
    active: Joi.boolean().required()
})

const updateCountrySchema = Joi.object({
    id: Joi.string().required(),
    name: Joi.string().required(),
    active: Joi.boolean().required()
})

const getCountry = asyncHandler(async(req, res) => {
    const countries = await getCountries();
    res.status(200).json(countries)
})

const addCountry = asyncHandler(async(req, res) => {
    const { error } = addCountrySchema.validate(req.body, {abortEarly: false})

    if(error) {
        res.status(400)
        throw new Error(error.message)
    }

    if(!req.file) {
        res.status(400)
        throw new Error("Failed to upload image")
    }
    
    const imageInfo = await imageUpload(req.file.path)
    
    if(imageInfo) {
        const { name, active } = req.body
        const country = await saveCountry({name, active, logo: imageInfo.secure_url});
        if(country) {
            res.status(201).json();
        } else {
            res.status(400)
            throw new Error("Country validation failed")
        }
    } else {
        res.status(400)
        throw new Error("Failed uploading the image")
    }
})

const updateCountry = asyncHandler(async(req, res) => {
    console.log(req.body)
    const { error } = updateCountrySchema.validate({id: req.params.id, name: req.body.name, active: req.body.active}, {abortEarly: false})

    if(error) {
        res.status(400)
        throw new Error(error.message)
    }

    const existingCountry = await getCountryById(req.params.id);

    if(existingCountry) {
        if(req.body.imageUpdated) {
            if(!req.file) {
                res.status(400)
                throw new Error("Failed to upload image")
            }
            
            const imageInfo = await imageUpload(req.file.path)
            if(imageInfo) {
                existingCountry.logo = imageInfo.secure_url
            } else {
                res.status(400)
                throw new Error("Failed uploading the image")
            }
        }
    
        const { name, active } = req.body
        existingCountry.name = name;
        existingCountry.active = active;
    
        const newCountry = await updateCountryById(req.params.id, existingCountry);
    
        if(newCountry) {
            res.status(201).json();
        } else {
            res.status(400)
            throw new Error("Country validation failed")
        }
    } else {
        res.status(400)
        throw new Error("No Data Found")
    }
    
})

const deleteCountry = asyncHandler(async(req, res) => {

})

export { getCountry, addCountry, updateCountry, deleteCountry }