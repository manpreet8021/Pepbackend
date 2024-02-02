import mongoose from "mongoose";

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
        type: String,
        required: true
    }
},{
    timestamps: true
})

const countryModel = mongoose.model('Country', countrySchema)

export default countryModel

export const getCountries = () => countryModel.find();
export const getCountryById = (id) => countryModel.findById(id);
export const deleteCountryById = (id) => countryModel.findOneAndDelete({ _id: id });
export const updateCountryById = (id, value) => countryModel.findByIdAndUpdate(id, value, {new: true});
export const saveCountry = (values) => new countryModel(values).save().then((country) => country.toObject());