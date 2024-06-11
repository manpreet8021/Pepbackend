import mongoose from "mongoose";

const favoriteSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    retreat: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Retreat',
        required: true
    }
}, {
    timestamps: true
})

const favoriteModel = mongoose.model('favorite', favoriteSchema)

export default favoriteModel

export const getFavorite = (params) => favoriteModel.findOne(params).populate('retreat', 'title thumbnail.location retreatDuration').select('_id retreat');;
export const getFavoriteByUser = (id) => favoriteModel.findOne({ user: id });
export const removeFavorite = (user, retreatId) => favoriteModel.findOneAndUpdate({ user: user }, { $pull: { retreat: retreatId } });
export const saveFavorite = (values) => new favoriteModel(values).save();