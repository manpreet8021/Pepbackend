import Joi from "joi";
import asyncHandler from "../../middleware/asyncHandler.js"
import { getLookUpData, saveLookUpData } from "../../models/lookUpData.js";
import { getLookUpByParams, getLookUpValue, getRetreatLookUpValues, saveLookUpValue } from "../../models/lookUpValue.js";
import mongoose from "mongoose";

const addlookUpDataSchema = Joi.object({
    name: Joi.string().required(),
    active: Joi.boolean().required()
})

const addlookUpValueSchema = Joi.object({
    name: Joi.string().required(),
    parent: Joi.string().pattern(/^[0-9a-fA-F]{24}$/).required(),
    active: Joi.boolean().required()
})

const getLookUpDatas = asyncHandler(async(req, res) => {
    const lookUpData = await getLookUpData();
    res.status(200).json(lookUpData)
})

const getLookUpValues = asyncHandler(async(req, res) => {
    const lookUpValue = await getLookUpValue();
    res.status(200).json(lookUpValue)
})

const getLookUpValueByType = asyncHandler(async(req, res) => {
    const id = req.params.id
    if(id) {
        const response = await getLookUpByParams({parent: id, active: true})
        if(response) {
            res.status(200).json(response)
        } else {
            res.status(400)
            throw new Error("No data for this type")
        }
    } else {
        res.status(400)
        throw new Error("Unable to find this type")
    }
})

const addLookUpData = asyncHandler(async(req, res) => {
    const {error} = addlookUpDataSchema.validate(req.body, {abortEarly: true});

    if(error) {
        res.status(400)
        throw new Error(error.message)
    }

    const { name, active } = req.body
    const lookUpData = await saveLookUpData({name, active});
    
    if(lookUpData) {
        res.status(201).json(lookUpData);
    } else {
        res.status(400)
        throw new Error("LookUp validation failed")
    }
})

const addLookUpValue = asyncHandler(async(req, res) => {
    const {error} = addlookUpValueSchema.validate(req.body, {abortEarly: true});

    if(error) {
        res.status(400)
        throw new Error(error.message)
    }

    const { name, active, parent } = req.body
    const lookUpValue = await saveLookUpValue({name, parent, active});
    
    if(lookUpValue) {
        res.status(201).json(lookUpValue);
    } else {
        res.status(400)
        throw new Error("LookUp validation failed")
    }
})

const getRetreatValue = asyncHandler(async(req, res) => {
    const getRetreatValues = await getRetreatLookUpValues()
    let returnValue = {}
    getRetreatValues.map((data) => {
        returnValue[data.name] = data.data
    })
    res.status(200).json(returnValue)
})

export { getLookUpDatas, getLookUpValues, getLookUpValueByType, addLookUpData, addLookUpValue, getRetreatValue }