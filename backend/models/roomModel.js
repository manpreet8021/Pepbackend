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
    },
    highlight: {
        type: [mongoose.Schema.Types.ObjectId],
        required: true,
        ref: 'LookUpValue'
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
export const getRoomByRetreat = (data) => roomModel.aggregate([
    {
        $match: {
            retreat: new mongoose.Types.ObjectId(data),
            active: true
        }
    },
    {
        $lookup: {
            from: 'lookupvalues',
            localField: 'highlight',
            foreignField: '_id',
            as: 'roomHighlight'
        }
    },
    {
        $project: {
            _id: 1,
            name: 1,
            images: '$images.location',
            price: 1,
            allowedGuest: 1,
            advance: 1,
            description: 1,
            roomHighlight: {
                name: 1,
                icon: 1
            }
        }
    },
    {
        $sort: {
            price: 1
        }
    }
])