import User from "../models/user.model.js";
import bcrypt from 'bcryptjs'
import { errorHandler } from "../utils/error.js";
export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;
   const salt = bcrypt.genSaltSync(10);
   const hashPassword = bcrypt.hashSync(req.body.password, salt);
  const newUser = new User({
    username,
    email,
    password: hashPassword
  });
  try {
    await newUser.save();
    res.status(201).json({ msg: "User created successfully" });
  } catch (err) {
    next(err)
  }
  
};
