import mongoose from "mongoose";

const imageSchema = new mongoose.Schema({
    name: {
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

const citySchema =  new mongoose.Schema({
    countryId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Country'
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
    }
},{
    timestamps: true
})

const cityModel = mongoose.model('City', citySchema)

export default cityModel;