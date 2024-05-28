import User from "../models/user.model.js";
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
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

 export const signin = async (req, res, next)=>{
  const {email, password} = req.body;
  try {
  const validUser = await User.findOne({email})
   if(!validUser) return next(errorHandler(404, 'User not found'))
    const validPassword = bcrypt.compareSync(password, validUser.password)
    if(!validPassword) return next(errorHandler(401, 'Wrong Credentials'))
    const teken = jwt.sign({id: validUser._id}, process.env.JWT_SECRET)
      const {password: pass, ...rest} = validUser._doc;
     res.cookie("access_token", teken,{httpOnly: true}).status(200).json(rest)
  } catch (error) {
   next(error) 
  }
}