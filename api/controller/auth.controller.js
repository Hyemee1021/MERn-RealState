import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";

export const signup = async (req, res) => {
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
    res.status(500).json(error.message);
  }
};
