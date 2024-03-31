import mongoose from "mongoose";
import imageSchema from "./imageSchema.js";

const citySchema =  new mongoose.Schema({
    country: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Country'
    },
    name: {
        type: String,
        required: true
    },
    images: {
        type: imageSchema,
        required: true
    },
    active: {
        type: Boolean,
        required: true,
        default: true
    },
    recommended: {
        type: Boolean,
        required: true,
        default: false
    }
},{
    timestamps: true
})

citySchema.index({ country: 1, name: 1 }, {unique: true})

const cityModel = mongoose.model('City', citySchema)

export default cityModel;

export const getCities = () => cityModel.find().populate('country', 'name');
export const getRecommontedCity = () => cityModel.find({recommended: true, active: true}).limit(10).select('_id name images')
export const getCityById = (id) => cityModel.findById(id);
export const deleteCityById = (id) => cityModel.findOneAndDelete({ _id: id });
export const updateCityById = (id, value) => cityModel.findByIdAndUpdate(id, value, {new: true}).populate('country', 'name');
export const saveCity = (values) => new cityModel(values).save().then((country) => country.populate('country', 'name'));