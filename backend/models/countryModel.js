import mongoose from "mongoose";
import imageSchema from "./imageSchema.js";

const countrySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    active: {
        type: Boolean,
        required: true,
        default: true
    },
    logo: {
        type: imageSchema,
        required: true
    }
},{
    timestamps: true
})

const countryModel = mongoose.model('Country', countrySchema)

export default countryModel

export const getAllCountries = () => countryModel.find({active: true}).select('_id name active logo.location logo.id');
export const getCountries = () => countryModel.find({active: true}).select('_id name active logo.location logo.id');
export const getCountryById = (id) => countryModel.findById(id).select('_id name active logo.location logo.id');
export const deleteCountryById = (id) => countryModel.findOneAndDelete({ _id: id });
export const updateCountryById = (id, value) => countryModel.findByIdAndUpdate(id, value, {new: true}).select('_id name active logo.location logo.id');
export const saveCountry = (values) => new countryModel(values).save().then((country) => getCountryById(country._id).lean());