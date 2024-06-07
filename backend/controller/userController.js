import moment from "moment";
import asyncHandler from "../middleware/asyncHandler.js";
import { getBookingForUser } from "../models/bookingModel.js";
import { getFavorite, getFavoriteByUser, removeFavorite, saveFavorite } from "../models/favoriteModel.js";

const getUserBooking = asyncHandler(async(req, res) => {
    try {
        const booking = await getBookingForUser(req.user._id)
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
        const retreatId = req.params.id

        const favorite = await getFavoriteByUser(user)

        if(favorite) {
            if (favorite.retreat.includes(retreatId)) {
                await removeFavorite(user, retreatId);
            } else {
                favorite.retreat.push(retreatId);
                await favorite.save();
            }
        } else {
            await saveFavorite({ user: user, retreat: [retreatId] });
            console.log('Favorite document created and retreat added to favorites');
        }
        res.status(201).json()
    } catch (error) {
        res.status(400)
        throw new Error("Unable to find favorite retreat for this user")
    }
})

export { getUserBooking, getAllFavorite, updateFavorite }