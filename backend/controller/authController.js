import { createUser, getUserByEmail } from '../models/userModel.js';
import {authentication, random} from '../helpers/index.js'
import Joi from 'joi';
import asyncHandler from '../middleware/asyncHandler.js';

const registerSchema = Joi.object({
    displayName: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required()
})

const loginSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required()
})

export const register = async (req,res)=>{
    try {
        const { error, value } = registerSchema.validate(req.body)

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
        res.status(200).json(user)
    } catch (error) {
        res.status(400)
        throw new Error("Something went wrong")
    }
}
 
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

    const salt =random()
    user.authentication.sessionToken= authentication(salt,user._id.toString())
    res.setCookie('PEPRELIER-AUTH',user.authentication.sessionToken,{domain:'localhost',path:'/'});

    res.status(200).json();
})