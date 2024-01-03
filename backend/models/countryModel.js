import mongoose from "mongoose";

const countrySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    active: {
        type: Boolean,
        required: true,
        default: true
    },
    logo: {
        type: String,
        required: true
    }
},{
    timestamps: true
})

const countryModel = mongoose.model('Country', countrySchema)

export default countryModel