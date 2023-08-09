import express from "express";
import { createAuth, getAuth, getOneAuth } from "../controller/authController";
import { createTask, deleteTask, viewTask } from "../controller/taskController";

const router = express.Router();
router.route("/create-task").post(createTask);
router.route("/view").get(viewTask);
router.route("/:authID/delete").get(deleteTask);

export default router;
