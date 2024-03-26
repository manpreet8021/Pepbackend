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
export const getRetreatLookUpValues = () => lookUpValueModel.aggregate(
    [
        {
            $match: {
                parent: {$in : [
                    new mongoose.Types.ObjectId('65d10cb4675106006ec49700'), 
                    new mongoose.Types.ObjectId('66000e041a6d8d03f622a85e'),
                    new mongoose.Types.ObjectId('660122f34d4e4c8595c9068e')
                ]},
                active: true
            }
        },
        {
            $lookup: {
                from: 'lookupdatas',
                localField: 'parent',
                foreignField: '_id',
                as: 'parent'
            }
        },
        {
            $unwind: "$parent"
        },
        {
            $group: {
                _id: "$parent._id",
                name: { $first: "$parent.name" },
                data: {
                    $push: { value: "$_id", label: "$name" }
                }
            }
        },
        {
            $project: {
                _id: 0,
                name: 1,
                data: 1
            }
        }
    ]
)