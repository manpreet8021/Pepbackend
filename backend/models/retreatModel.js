import mongoose from "mongoose";
import imageSchema from "./imageSchema.js";

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
    thumbnail: {
        type: imageSchema,
        required: true
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
        ref: 'User'
    },
    retreatHighlight: {
        type: [mongoose.Schema.Types.ObjectId],
        required: true,
        ref: 'LookUpValue'
    },
    retreatType: {
        type: [mongoose.Schema.Types.ObjectId],
        required: true,
        ref: 'LookUpValue'
    }
},{
    timestamps: true
})

const retreatModel = mongoose.model('Retreat', retreatSchema)

export default retreatModel;

export const getRetreatById = (id) => retreatModel.findById(id);
export const deleteRetreatById = (id) => retreatModel.findOneAndDelete({ _id: id });
export const updateRetreatById = (id, value) => retreatModel.findByIdAndUpdate(id, value, {new: true});
export const saveRetreat = (values,session) => new retreatModel(values).save({session}).then((retreat) => retreat.toObject());
export const deleteRetreatImageById = (id, image_id) => retreatModel.findOneAndUpdate({_id: id}, {$pull: {images: {id: image_id}}}, {new: true})
export const getRetreatByParams = (data) => retreatModel.findOne(data)
export const getAdminRetreaties = (value) => retreatModel.populate(retreatModel.aggregate(
    [
        {
            $match: value
        },
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
                            id: '$$typeElem._id',
                            name: '$$typeElem.name'
                        }
                    }
                },
                images: {
                    _id: 1,
                    location: 1
                },
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
                            image: {
                                $map: {
                                    input: '$$room.images',
                                    as: 'image',
                                    in: {
                                        id: '$$image.id',
                                        location: '$$image.location'
                                    }
                                }
                            },
                            active: '$$room.active',
                            price: '$$room.price',
                            allowedGuest: '$$room.allowedGuest',
                            advance: '$$room.advance',
                            description: '$$room.description',
                            highlight: '$$room.highlight'
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
                },
                retreatHighlight: 1,
                retreatType: 1,
                thumbnail: {
                    id: 1,
                    location: 1
                }
            }
        }
    ]),'type', 'name'
);
export const getRetreatDetails = (value) => retreatModel.aggregate(
    [
        {
            $match: {
                _id: new mongoose.Types.ObjectId(value),
                active: true
            }
        },
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
              from: 'lookupvalues',
              localField: 'rooms.highlight',
              foreignField: '_id',
              as: 'roomHighlight'
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
            $lookup: {
                from: 'lookupvalues',
                localField: 'retreatHighlight',
                foreignField: '_id',
                as: 'retreatHighlights'
            }
        },
        {
            $lookup: {
                from: 'lookupvalues',
                localField: 'retreatType',
                foreignField: '_id',
                as: 'retreatTypes'
            }
        },
        {
            $lookup: {
                from: 'countries',
                localField: 'address.country',
                foreignField: '_id',
                as: 'country'
            }
        },
        {
            $lookup: {
                from: 'cities',
                localField: 'address.city',
                foreignField: '_id',
                as: 'city'
            }
        },
        {
            $project: {
                title: 1,
                overview: 1,
                description: 1,
                retreatDuration: 1,
                type: '$type.name',
                images: '$images.location',
                youtubeUrl: 1,
                address: {
                    line1: 1,
                    line2: 1,
                    city: '$city.name',
                    country: '$country.name'
                },
                Guest: 1,
                directBook: 1,
                rooms: {
                    $map: {
                        input: '$rooms',
                        as: 'room',
                        in: {
                            _id: '$$room._id',
                            name: '$$room.name',
                            images: '$$room.images.location',
                            price: '$$room.price',
                            allowedGuest: '$$room.allowedGuest',
                            advance: '$$room.advance',
                            description: '$$room.description',
                            highlight: {
                                $map: {
                                    input: '$roomHighlight',
                                    as: 'highlight',
                                    in: {
                                        name: '$$highlight.name',
                                        icon: '$$highlight.icon'
                                    }
                                }
                            }
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
                },
                retreatHighlights: {
                    name: 1,
                    icon: 1
                },
                retreatTypes: {
                    name: 1
                },
                thumbnail: '$thumbnail.location',
                price: '$rooms.price'
            }
        }
    ])
export const getClientRetreaties = ({params, limit, skip}) => retreatModel.aggregate(
    [
        {
            $match: params
        },
        {
            $skip: skip
        },
        {
            $limit: limit
        },
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
                from: 'countries',
                localField: 'address.country',
                foreignField: '_id',
                as: 'country'
            }
        },
        {
            $lookup: {
                from: 'cities',
                localField: 'address.city',
                foreignField: '_id',
                as: 'city'
            }
        },
        {
            $project: {
                _id: 1,
                title: 1,
                thumbnail: '$thumbnail.location',
                rooms: '$rooms.price',
                country: '$country.name',
                city: '$city.name',
                retreatDuration: 1
            }
        }
    ]
)