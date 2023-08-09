import express, {Request, Response} from "express";
import authModel from "../model/authModel";

export const createAuth =async (req: Request, res: Response)=> {
    try {
        const {name, email} = req.body
        const auth = await authModel.create({name, email})
        return res.status(201).json({
            message : "Auth created successfully",
            dat: auth
        })
    } catch (error) {
        return res.status(404).json({
            message : "Error"
        })
    }
}

export const getAuth =async (req: Request, res: Response)=> {
    try {
        const auth = await authModel.find()
        return res.status(200).json({
            message : "Viewing all auth",
            dat: auth
        })
    } catch (error) {
        return res.status(404).json({
            message : "Error"
        })
    }
}

export const getOneAuth =async (req: Request, res: Response)=> {
    try {
        const {authID} = req.params
        const auth = await authModel.findById(authID)
        return res.status(200).json({
            message : "Viewing one auth",
            dat: auth
        })
    } catch (error) {
        return res.status(404).json({
            message : "Error"
        })
    }
}
