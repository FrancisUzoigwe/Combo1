import express from "express";
import { createAuth, getAuth, getOneAuth } from "../controller/authController";

const router = express.Router();
router.route("/create-user").post(createAuth);
router.route("/view").get(getAuth);
router.route("/:authID/view").get(getOneAuth);

export default router;
