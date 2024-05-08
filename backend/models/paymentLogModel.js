import mongoose from "mongoose";

const paymentLogSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    status: {
        type: String,
        enum: ['intialize', 'success','falure'],
        required: true
    },
    orderId: {
        type: String,
        required: true
    },
    retreat: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Retreat'
    },
    amount: {
        type: Number,
        required: true
    },
    reciept: {
        type: String,
        required: true
    }
},{
    timestamps: true
})

const paymentLogModel = mongoose.model('PaymentLog', paymentLogSchema)

export default paymentLogModel

export const getPaymentLogs = () => paymentLogModel.find();
export const getPaymentById = (id) => paymentLogModel.findById(id);
export const createPaymentLog = (values) => new paymentLogModel(values).save();
export const updatePaymentLogById = (id, value) => paymentLogModel.findByIdAndUpdate(id, value);