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

export const getCitiesByParams = (value) => cityModel.find(value).populate('country', 'name').select('_id name');
export const getAllCities = () => cityModel.find({active: true}).populate('country', 'name').select('_id name country recommended active images.id images.location');
export const getRecommontedCity = () => cityModel.find({recommended: true, active: true}).limit(10).select('_id name images.location')
export const getCityById = (id) => cityModel.findById(id).populate('country', 'name').select('_id name country recommended active images.id images.location');
export const deleteCityById = (id) => cityModel.findOneAndDelete({ _id: id });
export const updateCityById = (id, value) => cityModel.findByIdAndUpdate(id, value, {new: true}).populate('country', 'name').select('_id name country recommended active images.id images.location');
export const saveCity = (values) => new cityModel(values).save().then((city) => getCityById(city._id).lean());