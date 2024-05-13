import express from "express";
import mongoose from "mongoose";

//I need apllication string
mongoose.connect(
  "mongodb+srv://hyemee1021:JangP9941!@mern-realestate.9npdhyd.mongodb.net/?retryWrites=true&w=majority&appName=mern-realestate"
);
const app = express();

app.listen(3000, () => {
  console.log(`Server is running on port 3000!!`);
});
