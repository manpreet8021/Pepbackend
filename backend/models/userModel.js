import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    displayName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    authentication: { 
        password: {
            type: String,
            select: false
        },
        salt: {type: String, select: false},
        sessionStorage: {type: String, select: false}
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    authSource: {
        type: String,
        enum: ['self', 'google'],
        default: 'self'
    },
    address: {
        line1: {
            type: String,
        },
        line2: {
            type: String
        },
        state: {
            type: String
        },
        Country: {
            type: String
        }
    },
    phoneNumber: {
        type: String
    }
},{
    timestamps: true
})

const UserModel = mongoose.model("users", userSchema);

export default UserModel;


export const getUsers = () => UserModel.find();
export const getUserByEmail = (email) => UserModel.findOne({ email });
export const getUserBySessionToken = (sessionToken) => UserModel.findOne({ 'authentication.sessionStorage': sessionToken });
export const getUserById = (id) => UserModel.findById(id);
export const createUser = (values) => new UserModel(values).save().then((user) => user.toObject());
export const deleteUserById = (id) => UserModel.findOneAndDelete({ _id: id });
export const updateUserById = (id, value) => UserModel.findByIdAndUpdate(id, value);