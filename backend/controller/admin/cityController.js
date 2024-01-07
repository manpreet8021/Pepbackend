import Joi from "joi"
import asyncHandler from "../../middleware/asyncHandler.js"

const addCitySchema = Joi.object({
    countryId: Joi.string().required(),
    name: Joi.string().required(),
    
})

const getCities = asyncHandler(async(req, res) => {

})

const addCity = asyncHandler(async(req, res) => {

})

const updateCity = asyncHandler(async(req, res) => {

})

const deleteCity = asyncHandler(async(req, res) => {

})

export { getCities, addCity, updateCity, deleteCity }