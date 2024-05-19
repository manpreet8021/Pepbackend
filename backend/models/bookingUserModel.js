import mongoose from "mongoose";

const bookingUserSchema = new mongoose.Schema({
    booking: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Booking'
    },
    name: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    active: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true
})

const bookingUserModel = mongoose.model('BookingUser', bookingUserSchema)

export const getUserForBooking = (bookingId) => bookingUserModel.find({booking: bookingId});
export const getUserForBookingById = (id) => bookingUserModel.findById(id);
export const createUserForBooking = (values) => new bookingUserModel(values).save();
export const createBulkUserForBooking = (values) => bookingUserModel.insertMany(values)
export const updateUserForBookingById = (id, value) => bookingUserModel.findByIdAndUpdate(id, value);