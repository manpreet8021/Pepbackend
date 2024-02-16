import mongoose from "mongoose";

const imageSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    isMain: {
        type: Boolean,
        default: false
    }
})

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
        type: [imageSchema]
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

const roomModel = mongoose.model('City', roomSchema)

export default roomModel;

export const getRooms = () => roomModel.find();
export const getRoomById = (id) => roomModel.findById(id);
export const deleteRoomById = (id) => roomModel.findOneAndDelete({ _id: id });
export const updateRoomById = (id, value) => roomModel.findByIdAndUpdate(id, value, {new: true});
export const saveRoom = (values) => new roomModel(values).save().then((room) => room.toObject());