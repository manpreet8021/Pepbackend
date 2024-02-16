import asyncHandler from "../../middleware/asyncHandler.js"
import { getRetreaties } from "../../models/retreatModel.js";

const getRetreat = asyncHandler(async(req, res) => {
    const retreats = await getRetreaties();
    res.status(200).json(retreats)
})

const addRetreat = asyncHandler(async(req, res) => {
    res.status(201).json()
})

const updateRetreat = asyncHandler(async(req, res) => {
    res.status(201).json()
})

const deleteRetreat = asyncHandler(async(req, res) => {
    res.status(201).json()
})

export { getRetreat, addRetreat, updateRetreat, deleteRetreat }