import { createUser, getUserByEmail, getUserBySessionToken, updateUserById } from '../models/userModel.js';
import {authentication, random} from '../helpers/index.js'
import Joi from 'joi';
import asyncHandler from '../middleware/asyncHandler.js';
import { OAuth2Client } from 'google-auth-library'

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const registerSchema = Joi.object({
    displayName: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    confirmPassword: Joi.any().valid(Joi.ref('password')).required(),
    subscribe: Joi.boolean(),
    line1: Joi.string().required(),
    line2: Joi.string().allow(''),
    state: Joi.string().required(),
    country: Joi.string().required(),
    phoneNumber: Joi.string().regex(phoneRegExp).required()
})

const loginSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required()
})

const updateUserSchema = Joi.object({
    name: Joi.string().required(),
    line1: Joi.string().required(),
    line2: Joi.string().allow(''),
    state: Joi.string().required(),
    country: Joi.string().required(),
    phoneNumber: Joi.string().regex(phoneRegExp).required(),
    email: Joi.string().allow('')
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

    const { email, password, displayName, line1, line2, state, country, phoneNumber } = req.body;

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
        },
        address: {
            line1,
            line2,
            state,
            country,
        },
        phoneNumber
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

export const getUserDetail = asyncHandler(async(req, res) => {
    if(req.user) {
        const { displayName, email, phoneNumber, address } = req.user

        const response = {}
        response.name = displayName
        response.email = email
        response.phoneNumber = phoneNumber
        response.line1 = address.line1
        response.line2 = address.line2
        response.state = address.state
        response.country = address.country

        res.status(200).json(response)
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

export const updateUserDetail = asyncHandler(async(req, res) => {
    const { error } = updateUserSchema.validate(req.body, {abortEarly: false})

    if(error) {
        res.status(400)
        throw new Error("Data is not valid")
    }
    try {
        const { name, line1, line2, state, country, phoneNumber } = req.body

        const user = {
            displayName: name,
            address: {
                line1: line1,
                line2: line2,
                state: state,
                country: country
            },
            phoneNumber: phoneNumber
        }

        await updateUserById(req.user._id, user)

        res.status(201).json()
    } catch(error) {
        res.status(400)
        throw new Error("Failed updating the user")
    }
})

const getTokenCookie = (id) => {
    const salt = random()
    const token = authentication(salt,id.toString())
    return token
}