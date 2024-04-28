import Joi from "joi";
import asyncHandler from "../../middleware/asyncHandler.js"
import { getRetreatByParams, getAdminRetreaties, saveRetreat, updateRetreatById, getClientRetreaties, getRetreatDetails } from "../../models/retreatModel.js";
import { saveSchedule } from "../../models/scheduleModel.js";
import { getRoomById, getRoomByRetreat, saveRoom, updateRoomById } from "../../models/roomModel.js";
import { deleteImageFromCloudinary, uploadMultipleImages } from "../../helpers/imageUpload.js";
import mongoose from "mongoose";

const MultiSelectValidationSchema = Joi.string().pattern(/^[0-9a-fA-F]{24}$/).required()

const roomValidationSchema = Joi.object({
    _id: Joi.string().pattern(/^[0-9a-fA-F]{24}$/),
    name: Joi.string().required(),
    description: Joi.string().required(),
    price: Joi.number().positive().min(1).required(),
    allowedGuest: Joi.number().positive().required(),
    advance: Joi.number().positive().max(100).required(),
    active: Joi.boolean().required(),
    roomImageUpdated: Joi.boolean(),
    highlight: Joi.array().items(MultiSelectValidationSchema).required().min(1)
})

const durationValidationSchema = Joi.array().items(
    Joi.string().required(),
    Joi.string().required()
)

const deleteImageSchema = Joi.object({
    id: Joi.string().required(),
    image_id: Joi.string().required()
})

const addRetreatSchema = Joi.object({
    title: Joi.string().required(),
    overview: Joi.string().required(),
    description: Joi.string().required(),
    minGuest: Joi.number().positive().required(),
    maxGuest: Joi.number().min(Joi.ref('minGuest')).required(),
    youtubeUrl: Joi.string().allow(''),
    price: Joi.number().positive().min(1).required(),
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
    rooms: Joi.array().items(roomValidationSchema),
    retreatType: Joi.array().items(MultiSelectValidationSchema).required().min(1),
    retreatHighlight: Joi.array().items(MultiSelectValidationSchema).required().min(1)
})

const getRetreat = asyncHandler(async(req, res) => {
    let query = {}
    if(!req.user.isAdmin) {
        query.owner = req.user._id
    }

    const retreats = await getAdminRetreaties(query)
    res.status(200).json(retreats);
})

const addRetreat = asyncHandler(async(req, res) => {
    const { title, overview, description, minGuest, maxGuest, youtubeUrl, price, type, duration, retreatDuration, line1, line2, zipcode, city, country, active, directBook, rooms, retreatHighlight, retreatType } = req.body;
    const {error} = addRetreatSchema.validate({title, overview, description, minGuest, maxGuest, youtubeUrl, price, type, duration, retreatDuration, line1, line2, zipcode, city, country, active, directBook, rooms, retreatHighlight, retreatType}, {abortEarly: false})
    
    if(error) {
        res.status(400)
        throw new Error(error.message)
    }

    if(!req.files || !req.files.images || !req.files.thumbnail) {
        res.status(400);
        throw new Error("Failed to upload image")
    }

    const uploadedImage = await uploadMultipleImages(req.files.images, 'retreat')
    const uploadedThumbnail = await uploadMultipleImages(req.files.thumbnail, 'retreat')

    const session = await mongoose.startSession();

    session.startTransaction()

    try{
        if(uploadedImage.length && uploadedThumbnail) {
            const retreat = await saveRetreat({ title, overview, description, youtubeUrl, price, type, retreatDuration, active, directBook, address: { line1, line2, city, country, zipcode}, Guest: {max: maxGuest, min: minGuest}, owner: req.user._id, images: uploadedImage, thumbnail: uploadedThumbnail[0], retreatType, retreatHighlight }, session)
            if(retreat) {
                for(let i=0; i<duration.length; i++) {
                    await saveSchedule({startDate: duration[i][0], endDate: duration[i][1], retreat: retreat._id},session)
                }
                if(rooms && rooms.length){
                    for(let i=0; i<rooms.length; i++){
                        let uploadedRoomImage = await uploadMultipleImages(req.files[`rooms[${i}][images]`], 'rooms')
                        if(uploadedRoomImage.length) {
                            await saveRoom({name: rooms[i].name, description: rooms[i].description, price: rooms[i].price, allowedGuest: rooms[i].allowedGuest, active: rooms[i].active, advance: rooms[i].advance, retreat: retreat._id, images: uploadedRoomImage, highlight: rooms[i].highlight },session)
                        }
                    }
                }
                await session.commitTransaction();
                session.endSession();
                const newRetreat = await getAdminRetreaties({_id: retreat._id})
                res.status(201).json(newRetreat)
            } else {
                throw new Error("Failed to add a retreat")
            }
        } else {
            throw new Error("Failed uploading the image")
        }
    } catch (e) {
        await session.abortTransaction();
        session.endSession();
        res.status(400)
        throw new Error(e.message)
    }
})

const updateRetreat = asyncHandler(async(req, res) => {
    let query = {_id: req.params.id}

    if(!req.user.isAdmin) {
        query.owner = req.user._id
    }

    const existingRetreat = await getRetreatByParams(query)

    if(existingRetreat) {
        const { title, overview, description, minGuest, maxGuest, youtubeUrl, price, type, duration, retreatDuration, line1, line2, zipcode, city, country, active, directBook, rooms, retreatHighlight, retreatType } = req.body;
        const {error} = addRetreatSchema.validate({title, overview, description, minGuest, maxGuest, youtubeUrl, price, type, duration, retreatDuration, line1, line2, zipcode, city, country, active, directBook, rooms, retreatHighlight, retreatType}, {abortEarly: false})
        
        if(error) {
            res.status(400)
            throw new Error(error.message)
        }

        let updatedThumbnail = existingRetreat.thumbnail
        let updatedImages = existingRetreat.images

        if(req.body.thumbnailUpdated !== 'false') {
            if(!req.files.thumbnail) {
                res.status(400)
                throw new Error("Failed to upload thumbnail")
            }
            const uploadedThumbnail = await uploadMultipleImages(req.files.thumbnail, 'retreat')
            updatedThumbnail = uploadedThumbnail[0]
        }

        if(req.body.imageUpdated !== 'false') {
            if(!req.files.images) {
                res.status(400)
                throw new Error("Failed to upload Image")
            }
            
            const totalImages = req.files.images.length + existingRetreat.images.length
            
            if(totalImages.length > 5){
                throw new Error("Max length of retreat images should be 5")
            }
            
            const uploadedImage = await uploadMultipleImages(req.files.images, 'retreat')
            updatedImages = [...updatedImages, ...uploadedImage]
        }

        const session = await mongoose.startSession();

        session.startTransaction()

        try{
            const retreat = await updateRetreatById(existingRetreat._id, { title, overview, description, youtubeUrl, price, type, retreatDuration, active, directBook, address: { line1, line2, city, country, zipcode}, Guest: {max: maxGuest, min: minGuest}, images: updatedImages, thumbnail: updatedThumbnail, retreatType, retreatHighlight }, session)
            if(retreat) {
                if(rooms && rooms.length){
                    for(let i=0; i< rooms.length; i++) {
                        let uploadedRoomImage = []
                        if(rooms[i].roomImageUpdated) {
                            if(!req.files[`rooms[${i}][images]`]) {
                                res.status(400)
                                throw new Error("Failed to upload room images")
                            }
                            uploadedRoomImage = await uploadMultipleImages(req.files[`rooms[${i}][images]`], 'rooms')
                        }

                        if(rooms[i]._id) {
                            const existingRoom = await getRoomById(rooms[i]._id)

                            if(existingRoom) {
                                let roomTotalImage = existingRoom.images.length + uploadedRoomImage.length
                                if(roomTotalImage <= 5) {
                                    await updateRoomById(rooms[i]._id, {name: rooms[i].name, description: rooms[i].description, price: rooms[i].price, allowedGuest: rooms[i].allowedGuest, active: rooms[i].active, advance: rooms[i].advance, retreat: retreat._id, images: [...existingRoom.images, ...uploadedRoomImage], highlight: rooms[i].highlight }, session)
                                } else {
                                    throw new Error("Each room should not have more than 5 images")
                                }
                            } else {
                                throw new Error("Some of the room are not found")
                            }
                        }
                        else {
                            await saveRoom({name: rooms[i].name, description: rooms[i].description, price: rooms[i].price, allowedGuest: rooms[i].allowedGuest, active: rooms[i].active, advance: rooms[i].advance, retreat: retreat._id, images: uploadedRoomImage }, session)
                        }
                    }
                }
                await session.commitTransaction();
                session.endSession();
                const newRetreat = await getAdminRetreaties({_id: retreat._id})
                res.status(201).json(newRetreat)
            } else {
                throw new Error("Failed to add a retreat")
            }
        } catch (e) {
            await session.abortTransaction();
            session.endSession();
            res.status(400)
            throw new Error(e.message)
        }
    } else {
        res.status(400)
        throw new Error("No Data Found")
    }
})

const deleteRetreat = asyncHandler(async(req, res) => {
    res.status(201).json()
})

const deleteRetreatImage = asyncHandler(async(req, res) => {
    const {id, image_id} = req.params
    const {error} = deleteImageSchema.validate({id, image_id})

    if(error) {
        res.status(404)
        throw new Error("Validation failed")
    }

    let query = {_id: req.params.id}

    if(!req.user.isAdmin) {
        query.owner = req.user._id
    }

    const retreat = await getRetreatByParams(query)

    if(retreat) {
        if(retreat.images.length > 1) {
            let public_id = ''
            retreat.images.map(image => {
                if(image.id === image_id) {
                    public_id = image.public_id
                }
            })
            if(public_id){
                const cloudinaryResult = await deleteImageFromCloudinary(public_id)

                if(cloudinaryResult) {
                    retreat.images = retreat.images.filter(x => x.id !== image_id)
                    const updatedRetreat = await updateRetreatById(retreat._id, retreat)
                    res.status(201).json()
                } else {
                    throw new Error("Failed deleting image from cloudnairy")
                }
            } else {
                res.status(404)
                throw new Error("Image not found")
            }
        } else {
            res.status(400)
            throw new Error("Cannot delete the last image")
        }
    } else {
        res.status(404)
        throw new Error("Retreat not found")
    }
})

const deleteRoomImage = asyncHandler(async(req, res) => {
    const {id, image_id} = req.params
    const {error} = deleteImageSchema.validate({id, image_id})

    if(error) {
        res.status(404)
        throw new Error("Validation failed")
    }

    let query = {_id: req.params.id}

    if(!req.user.isAdmin) {
        query['retreat.owner'] = req.user._id
    }

    const room = await getRoomById(id)

    if(room) {
        if(room.images.length > 1) {
            let public_id = ''
            room.images.map(image => {
                if(image.id === image_id) {
                    public_id = image.public_id
                }
            })
            if(public_id) {
                const cloudinaryResult = await deleteImageFromCloudinary(image_id)

                if(cloudinaryResult) {
                    room.images = room.images.filter(x => x.id !== image_id)
                    const updatedRoom = await updateRoomById(room._id, room)
                    res.status(201).json()
                } else {
                    throw new Error("Failed deleting image from cloudnairy")
                }
            } else {
                res.status(404)
                throw new Error("Image not found")
            }
        } else {
            res.status(400)
            throw new Error("Cannot delete the last image")
        }
    } else {
        res.status(404)
        throw new Error("Room not found")
    }
})

const getRetreatDetailById = asyncHandler(async(req, res) => {
    try {
        const retreat = await getRetreatDetails(req.params.id)
        retreat[0].rooms = await getRoomByRetreat(req.params.id)
        
        if(retreat.length) {
            const finalRetreat = retreat.map(({address, rooms, price, ...data}) => {
                let finalAddress = {...address}
                finalAddress['country'] = finalAddress.country[0]
                finalAddress['city'] = finalAddress.city[0]
                
                let defaultRoom = rooms.length ? rooms[0]._id : ''
                let finalPrice = rooms.length ? rooms[0].price : price

                return {...data, address: finalAddress, roomId: defaultRoom, price: finalPrice, rooms}
            })
            res.status(200).json(finalRetreat[0])
        } else {
            throw new Error("Retreat not found")
        }
    } catch (error) {
        res.status(404)
        throw new Error("Retreat not found")
    }
})

const getRecommendedRetreat = asyncHandler(async(req, res) => {
    try {
        const retreat = await getClientRetreaties({params: {active: true}, limit: 8, skip: 0})
        const finalRetreat = retreat.map(({rooms, price, ...data}) => {
            let finalPrice = 0;
            if(rooms.length) {
                finalPrice = rooms.sort()[0]
            } else {
                finalPrice = price
            }
            return {...data, price: finalPrice, country: data?.country[0], city: data?.city[0]}
        })
        
        res.status(200).json(finalRetreat)
    } catch (error) {
        res.status(400)
        throw new Error("Failed getting retreat")
    }
})

const getRetreatByParameter = asyncHandler(async(req, res) => {
    const retreat = await getClientRetreaties({limit: req.body.limit, skip: req.body.skip, params: {active: true}})
    const finalRetreat = retreat.map(({rooms, price, ...data}) => {
        let finalPrice = 0;
            if(rooms.length) {
                finalPrice = rooms.sort()[0]
            } else {
                finalPrice = price
            }
            return {...data, price: finalPrice, country: data?.country[0], city: data?.city[0]}
    })
    
    res.status(200).json(finalRetreat)
})


export { getRetreat, addRetreat, updateRetreat, deleteRetreat, deleteRetreatImage, deleteRoomImage, getRecommendedRetreat, getRetreatDetailById, getRetreatByParameter }