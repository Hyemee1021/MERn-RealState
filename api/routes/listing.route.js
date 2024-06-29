import express from "express";
import {
  createListing,
  getListing,
  deleteListing,
} from "../controller/listing.controller.js";
import { verifyToken } from "../utils/verifyUser.js";
const router = express.Router();

router.post("/create", verifyToken, createListing);
router.delete("/delete/:id", verifyToken, deleteListing);
// router.get("/get/:id", getListing);

export default router;
