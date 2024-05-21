import { deleteImageFromCloudinary, imageUpload } from "../helpers/imageUpload.js";
import asyncHandler from "../middleware/asyncHandler.js"
import { getAllCountries, saveCountry, updateCountryById, getCountryById, getCountriesByParams } from "../models/countryModel.js"
import Joi from "joi";

const addCountrySchema = Joi.object({
    name: Joi.string().required(),
    active: Joi.boolean().required()
})

const updateCountrySchema = Joi.object({
    id: Joi.string().pattern(/^[0-9a-fA-F]{24}$/).required(),
    name: Joi.string().required(),
    active: Joi.boolean().required()
})

const getCountry = asyncHandler(async(req, res) => {
    const countries = await getAllCountries();
    res.status(200).json(countries)
})

const getCountryByParams = asyncHandler(async(req, res) => {
    const countries = await getCountriesByParams({active: true});
    res.status(200).json(countries)
})

const addCountry = asyncHandler(async(req, res) => {
    const { error } = addCountrySchema.validate({name: req.body.name, active: req.body.active}, {abortEarly: false})

    if(error) {
        res.status(400)
        throw new Error(error.message)
    }
    
    if(!req.file) {
        res.status(400)
        throw new Error("Failed to upload image")
    }
    
    const imageInfo = await imageUpload(req.file.path, 'country')
    
    if(imageInfo) {
        const { name, active } = req.body
        const country = await saveCountry({name, active, logo: imageInfo});
        
        if(country) {
            res.status(201).json(country);
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
    const { error } = updateCountrySchema.validate({id: req.params.id, name: req.body.name, active: req.body.active}, {abortEarly: false})

    if(error) {
        res.status(400)
        throw new Error(error.message)
    }

    const existingCountry = await getCountryById(req.params.id);

    if(existingCountry) {
        if(req.body.imageUpdated !== 'false') {
            if(!req.file) {
                res.status(400)
                throw new Error("Failed to upload image")
            }
            
            const imageInfo = await imageUpload(req.file.path, 'country')
            if(imageInfo) {
                if(existingCountry.logo.public_id) await deleteImageFromCloudinary(existingCountry.logo.public_id)
                existingCountry.logo = imageInfo
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
            res.status(201).json(newCountry);
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

export { getCountry, addCountry, updateCountry, deleteCountry, getCountryByParams }