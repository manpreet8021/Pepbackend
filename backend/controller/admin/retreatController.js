import Joi from "joi";
import asyncHandler from "../../middleware/asyncHandler.js"
import { getRetreaties, saveRetreat } from "../../models/retreatModel.js";
import { saveSchedule } from "../../models/scheduleModel.js";
import { saveRoom } from "../../models/roomModel.js";
import { uploadMultipleImages } from "../../helpers/imageUpload.js";
import mongoose from "mongoose";

const roomValidationSchema = Joi.object({
    name: Joi.string().required(),
    description: Joi.string().required(),
    price: Joi.number().positive().min(1).required(),
    allowedGuest: Joi.number().positive().required(),
    advance: Joi.number().positive().max(100).required(),
    active: Joi.boolean().required()
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

    if(!req.files || !req.files.images) {
        res.status(400);
        throw new Error("Failed to upload image")
    }

    const uploadedImage = await uploadMultipleImages(req.files.images, 'retreat')

    const session = await mongoose.startSession();

    session.startTransaction()

    try{
        if(uploadedImage.length) {
            const retreat = await saveRetreat({ title, overview, description, youtubeUrl, type, retreatDuration, active, directBook, address: { line1, line2, city, country, zipcode}, Guest: {max: maxGuest, min: minGuest}, owner: req.user._id, images: uploadedImage },session)
            if(retreat) {
                for(let i=0; i<duration.length; i++) {
                    await saveSchedule({startDate: duration[i][0], endDate: duration[i][1], retreat: retreat._id},session)
                }
                if(rooms && rooms.length){
                    for(let i=0; i<rooms.length; i++){
                        let uploadedRoomImage = await uploadMultipleImages(req.files[`rooms[${i}][images]`], 'rooms')
                        if(uploadedRoomImage.length) {
                            await saveRoom({name: rooms[i].name, description: rooms[i].description, price: rooms[i].price, allowedGuest: rooms[i].allowedGuest, active: rooms[i].active, advance: rooms[i].advance, retreat: retreat._id, images: uploadedRoomImage },session)
                        }
                    }
                }
                await session.commitTransaction();
                session.endSession();
                res.status(201).json(retreat)
            } else {
                await session.abortTransaction();
                session.endSession();
                res.status(400)
                throw new Error("Failed to add a retreat")
            }
        } else {
            await session.abortTransaction();
            session.endSession();
            res.status(400)
            throw new Error("Failed uploading the image")
        }
    } catch (e) {
        await session.abortTransaction();
        session.endSession();
        res.status(400)
        throw new Error("Failed to add a retreat")
    }
})

const updateRetreat = asyncHandler(async(req, res) => {
    res.status(201).json()
})

const deleteRetreat = asyncHandler(async(req, res) => {
    res.status(201).json()
})

export { getRetreat, addRetreat, updateRetreat, deleteRetreat }