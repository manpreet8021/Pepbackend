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

export const getCities = () => cityModel.find().populate('country', 'name');
export const getCityById = (id) => cityModel.findById(id);
export const deleteCityById = (id) => cityModel.findOneAndDelete({ _id: id });
export const updateCityById = (id, value) => cityModel.findByIdAndUpdate(id, value, {new: true}).populate('country', 'name');
export const saveCity = (values) => new cityModel(values).save().then((country) => country.populate('country', 'name'));