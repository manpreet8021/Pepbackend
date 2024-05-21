import { createUser, getUserByEmail, getUserBySessionToken } from '../models/userModel.js';
import {authentication, random} from '../helpers/index.js'
import Joi from 'joi';
import asyncHandler from '../middleware/asyncHandler.js';
import { OAuth2Client } from 'google-auth-library'

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

const googleSchemaValidation = Joi.object({
    clientId: Joi.string(),
    credential: Joi.string().required(),
    select_by: Joi.string().required()
})

export const register = asyncHandler(async (req,res)=>{
    const { error } = registerSchema.validate(req.body, { abortEarly: false })

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
    res.status(201).json()
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

    if(user.authentication.password != expectedHash){
        res.status(403);
        throw new Error("Password not valid")
    }

    const token = getTokenCookie(user._id)

    user.authentication.sessionStorage = token
    await user.save()

    res.cookie('PEPRELIER-AUTH', token , { 
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
    if(req.user) {
        res.status(200).json({name: req.user.displayName, isAdmin: req.user.isAdmin})
    } else {
        res.status(400)
        throw new Error("User not found")
    }
})

export const logout = asyncHandler(async(req, res) => {
    req.user.authentication.sessionStorage = null;
    const response = await req.user.save()
    res.clearCookie('PEPRELIER-AUTH');
    res.status(200).json()
})

export const googleLogin = asyncHandler(async(req, res) => {
    try {
        const {error} = googleSchemaValidation.validate(req.body)

        if (error) {
            throw new Error("Invalid login")
        }

        const client = new OAuth2Client();
        const { credential, client_id } = req.body;

        const response = await client.verifyIdToken({
            idToken: credential,
            audience: client_id,
        });

        const result = response.getPayload()
        let user = null

        if(result) {
            user = await getUserByEmail(result.email)
            if(!user) {
                let name = result.given_name;
                if (result.family_name) {
                    name = `${name} ${result.family_name}`;
                }

                user = await createUser({
                    email: result.email,
                    displayName: name,
                    authSource: 'google'
                })
            }
        } else {
            throw new Error()
        }

        const token = getTokenCookie(user._id)
        user.authentication.sessionStorage = token
        await user.save()

        res.cookie('PEPRELIER-AUTH', token , { 
            httpOnly: true, 
            secure: true, 
            sameSite: 'strict', 
            maxAge: 30 * 24 * 60 * 60 * 1000
        });

        res.status(200).json({
            name: user.displayName,
            isAdmin: user.isAdmin
        })
    } catch (error) {
        res.status(400)
        throw new Error("Invalid Login")
    }
})

const getTokenCookie = (id) => {
    const salt = random()
    const token = authentication(salt,id.toString())
    return token
}