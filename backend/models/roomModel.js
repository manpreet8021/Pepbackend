import mongoose from "mongoose";
import imageSchema from "./imageSchema.js";

const roomSchema =  new mongoose.Schema({
    retreat: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Retreat'
    },
    name: {
        type: String,
        required: true
    },
    images: {
        type: [imageSchema],
        required: true
    },
    active: {
        type: Boolean,
        required: true,
        default: true
    },
    price: {
        type: Number,
        required: true
    },
    allowedGuest: {
        type: Number,
        required: true
    },
    advance: {
        type: Number
    },
    description: {
        type: String,
        required: true
    }
},{
    timestamps: true
})

const roomModel = mongoose.model('Room', roomSchema)

export default roomModel;

export const getRooms = () => roomModel.find();
export const getRoomById = (id) => roomModel.findById(id);
export const deleteRoomById = (id) => roomModel.findOneAndDelete({ _id: id });
export const updateRoomById = (id, value) => roomModel.findByIdAndUpdate(id, value, {new: true});
export const saveRoom = (values, session) => new roomModel(values).save({session}).then((room) => room.toObject());