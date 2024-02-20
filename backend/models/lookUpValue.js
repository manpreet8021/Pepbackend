import mongoose from "mongoose";

const lookUpValueSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    parent: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'LookUpData'
    },
    active: {
        type: Boolean,
        required: true,
        default: true
    }
},{
    timestamps: true
})

const lookUpValueModel = mongoose.model('LookUpValue', lookUpValueSchema)

export default lookUpValueModel

export const getLookUpValue = () => lookUpValueModel.find();
export const getLookUpValueById = (id) => lookUpValueModel.findById(id);
export const deleteLookUpValueById = (id) => lookUpValueModel.findOneAndDelete({ _id: id });
export const updateLookUpValueById = (id, value) => lookUpValueModel.findByIdAndUpdate(id, value, {new: true});
export const saveLookUpValue = (values) => new lookUpValueModel(values).save().then((lookup) => lookup.toObject());
export const getLookUpByParams = (params) => lookUpValueModel.find(params).populate();