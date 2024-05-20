import mongoose from "mongoose";
import sequence from 'mongoose-sequence';

const AutoIncrement = sequence(mongoose);
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
    order:{
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        enum: ['intialize', 'success', 'failure'],
        required: true
    },
    request: {
        type: String,
        required: false
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    bookingNumber: {
        type: Number
    },
    method: {
        type: String
    }
},{
    timestamps: true
})

bookingSchema.plugin(AutoIncrement, { inc_field: 'bookingNumber', start_seq: 10000 });

const bookingModel = mongoose.model('Booking', bookingSchema)

export default bookingModel

export const getBookings = (params) => bookingModel.findOne(params);
export const getBookingById = (id) => bookingModel.findById(id);
export const createBooking = (values) => new bookingModel(values).save();
export const updateBookingById = (id, value) => bookingModel.findByIdAndUpdate(id, value, {new: true}).select('bookingNumber');
export const getBookingByOrderId = (params) => bookingModel.findOne(params).populate('retreat', 'title').select('bookingNumber method price retreat status');