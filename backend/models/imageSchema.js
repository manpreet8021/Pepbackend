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

export default imageSchema