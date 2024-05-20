import express from "express";
import { google, signin, signup } from "../controller/auth.controller.js";
const router = express.Router();
//creating routes
router.post("/signup", signup);
router.post("/signin", signin);
router.post("/google", google);

export default router;
