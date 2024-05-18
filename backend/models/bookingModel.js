import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
    retreat: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Retreat',
        required: true
    },
    room: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Room',
        required: true
    },
    status: {
        type: String,
        enum: ['intialize', 'success', 'falure'],
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
},{
    timestamps: true
})

const bookingModel = mongoose.model('Booking', bookingSchema)

export default bookingModel

export const getBookings = () => bookingModel.find();
export const getBookingById = (id) => bookingModel.findById(id);
export const createBooking = (values) => new bookingModel(values).save();
export const updateBookingById = (id, value) => bookingModel.findByIdAndUpdate(id, value);