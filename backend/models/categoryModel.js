import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    parent: {
        type: String,
        required: true
    },
    active: {
        type: Boolean,
        required: true,
        default: true
    }
},{
    timestamps: true
})

const categoryModel = mongoose.model('Category', categorySchema)

export default categoryModel

export const getCategories = () => categoryModel.find();
export const getCategoryById = (id) => categoryModel.findById(id);
export const deleteCategoryById = (id) => categoryModel.findOneAndDelete({ _id: id });
export const updateCategoryById = (id, value) => categoryModel.findByIdAndUpdate(id, value, {new: true});
export const saveCategory = (values) => new categoryModel(values).save().then((category) => category.toObject());