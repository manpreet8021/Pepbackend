import asyncHandler from "../middleware/asyncHandler.js";
import { getRecommontedCity } from "../models/cityModel.js";

export const search = asyncHandler(async(req, res) => {
    res.status(200).json()
})

export const getRecommendedCities = asyncHandler(async(req, res) => {
    const cities = await getRecommontedCity()
    
    const updatedCities = cities.map(city => {
        const mainImage = city.images.find(image => image.isMain === true)
        return {
            _id: city._id,
            name: city.name,
            image: mainImage.location
        }
    })
    res.status(200).json(updatedCities)
})