import mongoose from "mongoose";

const scheduleSchema = new mongoose.Schema({
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    },
    retreat: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'retreats'
    }
},{
    timestamps: true
})

const scheduleModel = mongoose.model('Schedule', scheduleSchema)

export default scheduleModel;

export const getSchedules = () => scheduleModel.find();
export const getScheduleById = (id) => scheduleModel.findById(id);
export const deleteScheduleById = (id) => scheduleModel.findOneAndDelete({ _id: id });
export const updateScheduleById = (id, value) => scheduleModel.findByIdAndUpdate(id, value, {new: true});
export const saveSchedule = (values, session) => new scheduleModel(values).save({session}).then((schedule) => schedule.toObject());