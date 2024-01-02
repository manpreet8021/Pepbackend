import express from 'express'
import { createUser, getUserByEmail } from '../models/userModel.js';
import {authentication, random} from '../helpers/index.js'

export const register = async (req,res)=>{
    try {
        const {email,password,username}= req.body;
        if(!email || !password || !username){
            return res.sendStatus(400)
        }
        const existingUser= await getUserByEmail(email);
        if(existingUser){
            return res.sendStatus(400)
        }

        const salt = random();
        const user = await createUser({
            email,
            username,
            authentication:{
                salt,password:authentication(salt,password)
            }
        })
        return res.status(200).json(user).end();
    } catch (error) {
        console.log(error)
        return res.sendStatus(400)
    }
}
//Login 
export const login= async (req,res)=>{
    try {
        const {email,password}= req.body;
        if(!email || !password){
            return res.sendStatus(400)
        }
        
        const user = await getUserByEmail(email);

        if(!user){
            return res.sendStatus(400)
        }
        
    } catch (error) {
        console.log(error)
        return res.sendStatus(400);
    }
}