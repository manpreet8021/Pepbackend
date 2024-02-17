import mongoose from "mongoose";

const lookUpDataSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    active: {
        type: Boolean,
        required: true,
        default: true
    }
},{
    timestamps: true
})

const lookUpData = mongoose.model('LookUpData', lookUpDataSchema)

export default lookUpData

export const getLookUpData = () => lookUpData.find();
export const getLookUpDataById = (id) => lookUpData.findById(id);
export const deleteLookUpDataById = (id) => lookUpData.findOneAndDelete({ _id: id });
export const updateLookUpDataById = (id, value) => lookUpData.findByIdAndUpdate(id, value, {new: true});
export const saveLookUpData = (values) => new lookUpData(values).save().then((lookup) => lookup.toObject());