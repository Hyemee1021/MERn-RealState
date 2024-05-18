import express from "express";
import { signin, signup } from "../controller/auth.controller.js";
const router = express.Router();
//creating routes
router.post("/signup", signup);
router.post("/signin", signin);

export default router;
