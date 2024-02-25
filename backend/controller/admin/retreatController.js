import Joi from "joi";
import asyncHandler from "../../middleware/asyncHandler.js"
import { getRetreaties } from "../../models/retreatModel.js";

const roomValidationSchema = Joi.object({
    roomName: Joi.string().required(),
    roomDescription: Joi.string().required(),
    roomPrice: Joi.number().positive().min(1).required(),
    roomGuestCount: Joi.number().positive().required()
})

const durationValidationSchema = Joi.array().items(
    Joi.string().required(),
    Joi.string().required()
)

const addRetreatSchema = Joi.object({
    title: Joi.string().required(),
    overview: Joi.string().required(),
    description: Joi.string().required(),
    minGuest: Joi.number().positive().required(),
    maxGuest: Joi.number().min(Joi.ref('minGuest')).required(),
    youtubeUrl: Joi.string().allow(''),
    type: Joi.string().pattern(/^[0-9a-fA-F]{24}$/).required(),
    line1: Joi.string().required(),
    line2: Joi.string().allow(''),
    zipcode: Joi.string().required(),
    city: Joi.string().pattern(/^[0-9a-fA-F]{24}$/).required(),
    country: Joi.string().pattern(/^[0-9a-fA-F]{24}$/).required(),
    active: Joi.boolean().required(),
    directBook: Joi.boolean().required(),
    duration: Joi.array().items(durationValidationSchema).required().min(1),
    retreatDuration: Joi.number().positive().required(),
    rooms: Joi.array().items(roomValidationSchema)
})

const getRetreat = asyncHandler(async(req, res) => {
    const retreats = await getRetreaties();
    res.status(200).json(retreats);
})

const addRetreat = asyncHandler(async(req, res) => {
    const { title, overview, description, minGuest, maxGuest, youtubeUrl, type, duration, retreatDuration, line1, line2, zipcode, city, country, active, directBook, rooms } = req.body;
    const {error} = addRetreatSchema.validate({title, overview, description, minGuest, maxGuest, youtubeUrl, type, duration, retreatDuration, line1, line2, zipcode, city, country, active, directBook, rooms}, {abortEarly: false})
    
    if(error) {
        res.status(400)
        throw new Error(error.message)
    }

    res.status(201).json()
})

const updateRetreat = asyncHandler(async(req, res) => {
    res.status(201).json()
})

const deleteRetreat = asyncHandler(async(req, res) => {
    res.status(201).json()
})

export { getRetreat, addRetreat, updateRetreat, deleteRetreat }