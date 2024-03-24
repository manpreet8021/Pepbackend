import asyncHandler from "../middleware/asyncHandler.js";
import { getRecommontedCity } from "../models/cityModel.js";

export const search = asyncHandler(async(req, res) => {
    res.status(200).json()
})

export const getRecommendedCities = asyncHandler(async(req, res) => {
    const cities = await getRecommontedCity()
    res.status(200).json(cities)
})