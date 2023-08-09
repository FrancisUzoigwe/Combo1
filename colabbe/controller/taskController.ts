import express, {Request, Response} from "express";
import { HTTP } from "../error/mainError";
import authModel from "../model/authModel";
import taskModel from "../model/taskModel";

export const createTask =async (req: Request, res: Response)=> {
    try {
        const {task} = req.body
        const auth = await taskModel.create({task})
        return res.status(HTTP.OK).json({
            message : "Auth created successfully",
            dat: auth
        })
    } catch (error) {
        return res.status(HTTP.BAD).json({
            message : "Error"
        })
    }
}

export const viewTask =async (req: Request, res: Response)=> {
    try {
        const auth = await taskModel.find()
        return res.status(HTTP.OK).json({
            message : "Viewing all auth",
            dat: auth
        })
    } catch (error) {
        return res.status(HTTP.BAD).json({
            message : "Error"
        })
    }
}

export const deleteTask =async (req: Request, res: Response)=> {
    try {
        const {taskID} = req.params
        const auth = await taskModel.findById(taskID)
        return res.status(HTTP.OK).json({
            message : "Task deleted successfully",
            dat: auth
        })
    } catch (error) {
        return res.status(HTTP.BAD).json({
            message : "Error"
        })
    }
}
