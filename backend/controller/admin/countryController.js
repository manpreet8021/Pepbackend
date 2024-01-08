import { imageUpload } from "../../helpers/imageUpload.js";
import asyncHandler from "../../middleware/asyncHandler.js"
import { getCountries, saveCountry } from "../../models/countryModel.js"
import Joi from "joi";

const addCountrySchema = Joi.object({
    name: Joi.string().required(),
    active: Joi.boolean()
})

const getCountry = asyncHandler(async(req, res) => {
    const countries = await getCountries();
    res.status(200).json(countries)
})

const addCountry = asyncHandler(async(req, res) => {
    const { error } = addCountrySchema.validate(req.body, {abortEarly: false})

    if(error && !req.file) {
        res.status(400)
        throw new Error("Data is not valid")
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

})

const deleteCountry = asyncHandler(async(req, res) => {

})

export { getCountry, addCountry, updateCountry, deleteCountry }