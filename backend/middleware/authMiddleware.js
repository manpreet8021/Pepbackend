import asyncHandler from "./asyncHandler";
import UserModel from "../models/userModel";

const adminProtect = asyncHandler(async(req, res, next) => {
    let token = '';
    token = req.cookies.token;

    if(token) {
        const user = UserModel.findById({_id: token.userId});
        if(user && user.isAdmin) {
            req.user = user
            next();
        } else {
            res.statusCode(401);
            throw new Error("Unauthorized")
        }
    } else {
        res.statusCode(401);
        throw new Error("Token is not valid please login again")
    }
}) 

const protect = asyncHandler(async(req, res, next) => {
    let token = '';
    token = req.cookies.token;

    if(token) {
        const user = UserModel.findById({_id: token.userId});
        if(user) {
            req.user = user
            next();
        } else {
            res.statusCode(401);
            throw new Error("Unauthorized")
        }
    } else {
        res.statusCode(401);
        throw new Error("Token is not valid please login again")
    }
})

export {protect, adminProtect}