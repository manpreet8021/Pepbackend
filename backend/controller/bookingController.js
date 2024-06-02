import moment from "moment";
import asyncHandler from "../middleware/asyncHandler.js";
import { getBookingForUser } from "../models/bookingModel.js";

const getUserBooking = asyncHandler(async(req, res) => {
    try {
        const booking = await getBookingForUser(req.user._id)
        res.status(200).json(booking)
    } catch (error) {
        res.status(400)
        throw new Error("Unable to find booking for this user")
    }
})

export { getUserBooking }