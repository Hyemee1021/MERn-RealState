import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";
dotenv.config();

//I need apllication string
mongoose.connect(
  "mongodb+srv://hyemee1021:JangP9941!@mern-realestate.9npdhyd.mongodb.net/?retryWrites=true&w=majority&appName=mern-realestate"
);
const app = express();
//allowing json form as input
app.use(express.json());

app.listen(3000, () => {
  console.log(`Server is running on port 3000!!`);
});

//api route
//req is from client
//res is from server

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
