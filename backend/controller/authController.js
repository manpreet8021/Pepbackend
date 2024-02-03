import { createUser, getUserByEmail, getUserBySessionToken } from '../models/userModel.js';
import {authentication, random} from '../helpers/index.js'
import Joi from 'joi';
import asyncHandler from '../middleware/asyncHandler.js';

const registerSchema = Joi.object({
    displayName: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    privacyBox: Joi.boolean()
})

const loginSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required()
})

export const register = asyncHandler(async (req,res)=>{
    const { error, value } = registerSchema.validate(req.body, { abortEarly: false })

    if(error) {
        res.status(400)
        throw new Error(error)
    }

    const { email, password, displayName } = req.body;

    const existingUser= await getUserByEmail(email);
    
    if(existingUser){
        res.status(400)
        throw new Error("User already exists")
    }

    const salt = random();
    const user = await createUser({
        email,
        displayName,
        authentication:{
            salt,password:authentication(salt,password)
        }
    })
    res.status(200).json({
        name: user.displayName,
        isAdmin: user.isAdmin
    })
})
 
export const login = asyncHandler(async (req,res)=>{
    const {error} = loginSchema.validate(req.body, { abortEarly: false })

    if(error){
        res.status(400)
        throw new Error(JSON.stringify(error))
    }

    const {email,password} = req.body;
    
    const user = await getUserByEmail(email).select('+authentication.salt +authentication.password');

    if(!user){
        res.status(400)
        throw new Error("User not found")
    }
    
    const expectedHash = authentication(user.authentication.salt, password);

    if(user.authentication.password!= expectedHash){
        res.status(403);
        throw new Error("Password not valid")
    }

    const salt = random()
    user.authentication.sessionStorage = authentication(salt,user._id.toString())
    
    await user.save()

    res.cookie('PEPRELIER-AUTH', user.authentication.sessionStorage, { 
        httpOnly: true, 
        secure: true, 
        sameSite: 'strict', 
        maxAge: 30 * 24 * 60 * 60 * 1000
    });

    res.status(200).json({
        name: user.displayName,
        isAdmin: user.isAdmin
    });
})

export const getUserInfo = asyncHandler(async(req, res) => {
    const cookie = req.cookies['PEPRELIER-AUTH']

    if(cookie) {
        const user = getUserBySessionToken(cookie)
        if(user) {
            res.status(200).json({
                name: user.displayName,
                isAdmin: user.isAdmin
            })
        } else {
            res.status(400)
            throw new Error("User not found")
        }
    } else {
        res.status(400)
        throw new Error("Cookie not found")
    }
})