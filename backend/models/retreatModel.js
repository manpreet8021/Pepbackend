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
    type: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'LookUpValue'
    },
    images: {
        type: [imageSchema],
        required: true
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
    address: {
        line1: {
            type: String,
            required: true
        },
        line2: {
            type: String,
        },
        city: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'countries'
        },
        country: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'cities'
        },
        zipcode: {
            type: String,
            required: true
        },
        lat: {
            type: String
        },
        lon: {
            type: String
        },
        description: {
            type: String
        }
    },
    retreatDuration: {
        type: Number,
        required: true
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
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Users'
    }
},{
    timestamps: true
})

const retreatModel = mongoose.model('Retreat', retreatSchema)

export default retreatModel;

export const getRetreaties = () => retreatModel.populate(retreatModel.aggregate([
    {
        $lookup: {
            from: 'rooms',
            localField: '_id',
            foreignField: 'retreat',
            as: 'rooms'
        }
    },
    {
        $lookup: {
            from: 'schedules',
            localField: '_id',
            foreignField: 'retreat',
            as: 'schedules'
        }
    },
    {
        $lookup: {
            from: 'lookupvalues',
            localField: 'type',
            foreignField: '_id',
            as: 'type'
        }
    },
    {
        $project: {
            _id: 1,
            title: 1,
            overview: 1,
            description: 1,
            retreatDuration: 1,
            type: {
                $let: {
                    vars: { typeElem: { $arrayElemAt: ['$type', 0] } },
                    in: {
                        _id: '$$typeElem._id',
                        name: '$$typeElem.name'
                    }
                }
            },
            images: 1,
            youtubeUrl: 1,
            address: 1,
            active: 1,
            Guest: 1,
            directBook: 1,
            rooms: {
                $map: {
                    input: '$rooms',
                    as: 'room',
                    in: {
                        _id: '$$room._id',
                        name: '$$room.name',
                        images: '$$room.images',
                        active: '$$room.active',
                        price: '$$room.price',
                        allowedGuest: '$$room.allowedGuest',
                        advance: '$$room.advance',
                        description: '$$room.description'
                    }
                }
            },
            schedules:{
                $map: {
                    input: '$schedules',
                    as: 'schedule',
                    in: [
                        '$$schedule.startDate',
                        '$$schedule.endDate'
                    ]
                }
            }
        }
    }
]),'type', 'name');
export const getRetreatById = (id) => retreatModel.findById(id);
export const deleteRetreatById = (id) => retreatModel.findOneAndDelete({ _id: id });
export const updateRetreatById = (id, value) => retreatModel.findByIdAndUpdate(id, value, {new: true});
export const saveRetreat = (values,session) => new retreatModel(values).save({session}).then((retreat) => retreat.toObject());