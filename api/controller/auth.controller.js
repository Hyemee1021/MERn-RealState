import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";

export const signup = async (req, res, next) => {
  const salt = 10;

  const { username, email, password } = req.body;
  const hashPassword = bcryptjs.hashSync(password, salt);

  //save in database
  const newUser = new User({ username, email, password: hashPassword });

  //in case there is an error I like to show it
  try {
    //since saving takes time
    //await will make excute stay here until a jonb is finished
    await newUser.save();

    res.status(201).json("User is created.");
  } catch (error) {
    next(error);
  }
};

export const signin = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    //when key and value's names are the same, I can put one
    const validUser = await User.findOne({ email });
    //When there is some error in find a user in dataase,
    //error middleware will handle it
    if (!validUser) return next(errorHandler(404, " User is not found"));
    //if there is a user I can compare password from frontend and
    //password from database
    const validPassword = bcryptjs.compareSync(password, validUser.password);

    if (!validPassword) return next(errorHandler, "Wrong credentials");
    //create a jwt token-hashed userId
    const token = jwt.sign({ id: validUser.id }, process.env.JWT_SECRET);
    const { password: pass, ...rest } = validUser._doc;
    //save the token as a cookie-and send it to user without password
    res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json(rest);
  } catch (error) {
    //this is coming from index.js
    next(error);
  }
};
