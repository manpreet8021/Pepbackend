import mongoose from "mongoose";
import imageSchema from "./imageSchema";
import { required } from "joi";

const retreatFeedbackSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    retreat: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'retreat'
    },
    images: {
        type: [imageSchema],
        required: true
    }
},{
    timestamps: true
})

const retreatFeedbackModel = mongoose.model('retreatFeedback', retreatFeedbackSchema)