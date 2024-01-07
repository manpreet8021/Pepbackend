import asyncHandler from "../../middleware/asyncHandler.js"
import { getCountries, saveCountry } from "../../models/countryModel.js"
import Joi from "joi";

const addCountrySchema = Joi.object({
    name: Joi.string().required(),
    logo: Joi.binary(),
    active: Joi.boolean()
})

const getCountry = asyncHandler(async(req, res) => {
    const countries = getCountries();
    res.status.json(countries)
})

const addCountry = asyncHandler(async(req, res) => {
    const { error } = addCountrySchema.validate(req.body, {abortEarly: false})

    if(error) {
        res.status(400)
        throw new Error("Data is not valid")
    }
    
    await saveCountry(req.body);

    res.status(201).json();
})

const updateCountry = asyncHandler(async(req, res) => {

})

const deleteCountry = asyncHandler(async(req, res) => {

})

export { getCountry, addCountry, updateCountry, deleteCountry }