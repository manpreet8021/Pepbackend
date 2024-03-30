import mongoose from "mongoose";

const imageSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    public_id: {
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
    },
    data: {
        type: Object,
        required: true
    }
})

export default imageSchema