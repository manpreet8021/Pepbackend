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

const retreatSchema =  new mongoose.Schema({
    country: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Country'
    },
    city: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'City'
    },
    title: {
        type: String,
        required: true
    },
    overview: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    type: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Category'
    },
    images: {
        type: [imageSchema]
    },
    youtubeUrl: {
        type: String,
        required: false
    },
    active: {
        type: Boolean,
        required: true,
        default: true
    },
    location: {
        lat: {
            type: String,
            required: true
        },
        lon: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        }
    },
    duration: {
        startDate: {
            type: Date,
            required: true
        },
        endDate: {
            type: Date,
            required: true
        }
    },
    Guest: {
        max: {
            type: Number,
            required: true
        },
        min: {
            type: Number,
            required: true
        }
    },
    directBook: {
        type: Boolean,
        required: true,
        default: true
    }
},{
    timestamps: true
})

const retreatModel = mongoose.model('Retreat', retreatSchema)

export default retreatModel;

export const getRetreaties = () => retreatModel.find();
export const getRetreatById = (id) => retreatModel.findById(id);
export const deleteRetreatById = (id) => retreatModel.findOneAndDelete({ _id: id });
export const updateRetreatById = (id, value) => retreatModel.findByIdAndUpdate(id, value, {new: true});
export const saveRetreat = (values) => new retreatModel(values).save().then((retreat) => retreat.toObject());