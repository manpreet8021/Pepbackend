import mongoose from "mongoose";
import sequence from 'mongoose-sequence';

const AutoIncrement = sequence(mongoose);

const bookingUserSchema = new mongoose.Schema({
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
})

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
        enum: ['intialize', 'success', 'failure', 'cancelled'],
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
    },
    name: {
        type: String,
        required: true
    }, 
    email: {
        type: String,
        required: true
    },
    address: {
        line1: {
            type: String,
            required: true
        },
        line2: {
            type: String
        },
        state: {
            type: String,
            required: true
        },
        country: {
            type: String,
            required: true
        }
    },
    phoneNumber: {
        type: String,
        required: true
    },
    attendee: {
        type: [bookingUserSchema],
        required: true
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
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
export const getBookingByOrderId = (params) => bookingModel.findOne(params).populate('retreat', 'title').select('bookingNumber method price retreat status address phoneNumber name email');
export const getAllBookingForUser = (params) => bookingModel.find(params).populate('retreat', 'title thumbnail.location retreatDuration').select('_id price retreat bookingNumber startDate endDate request');
export const getBookingForUser = (params) => bookingModel.findOne(params).populate('retreat', 'title retreatDuration').select('_id price retreat bookingNumber startDate endDate request name address email attendee createdAt');