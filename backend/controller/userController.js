import moment from "moment";
import asyncHandler from "../middleware/asyncHandler.js";
import { getAllBookingForUser, getBookingForUser } from "../models/bookingModel.js";
import { getFavorite, getFavoriteByUser, removeFavorite, saveFavorite } from "../models/favoriteModel.js";

const getUserBooking = asyncHandler(async(req, res) => {
    try {
        const booking = await getAllBookingForUser({user: req.user._id})
        res.status(200).json(booking)
    } catch (error) {
        res.status(400)
        throw new Error("Unable to find booking for this user")
    }
})

const getAllFavorite = asyncHandler(async(req, res) => {
    try {
        const params = {
            user: req.user._id
        }
        const favorite = await getFavorite(params)
        res.status(200).json(favorite)
    } catch (error) {
        console.log(error)
        res.status(400)
        throw new Error("Unable to find favorite retreat for this user")
    }
})

const updateFavorite = asyncHandler(async(req, res) => {
    try {
        const user = req.user._id
        const {id: retreatId} = req.body
        const response = {newInsert: true}

        const favorite = await getFavoriteByUser(user)

        if(favorite) {
            if (favorite.retreat.includes(retreatId)) {
                await removeFavorite(user, retreatId);
                response.newInsert= false;
            } else {
                favorite.retreat.push(retreatId);
                await favorite.save();
            }
        } else {
            await saveFavorite({ user: user, retreat: [retreatId] });
        }

        res.status(201).json(response)
    } catch (error) {
        res.status(400)
        throw new Error("Unable to find favorite retreat for this user")
    }
})

const getInvoiceDetailForBooking = asyncHandler(async(req, res) => {
    const {id} = req.params
    const {_id: userId} = req.user

    try {
        const bookingDetail = await getBookingForUser({bookingNumber: id, user: userId})
        if(!bookingDetail){
            throw new Error()
        }
        
        res.status(200).json(bookingDetail)
    } catch (error) {
        res.status(400)
        throw new Error("Failed getting Invoice detail")
    }
})

export { getUserBooking, getAllFavorite, updateFavorite, getInvoiceDetailForBooking }