import asyncHandler from "../middleware/asyncHandler.js";

const getUserBooking = asyncHandler(async(req, res) => {
    try {
        
    } catch (error) {
        res.status(400)
        throw new Error("Unable to find booking for this user")
    }
})

export { getUserBooking }