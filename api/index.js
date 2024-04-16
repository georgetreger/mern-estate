import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bcrypt from 'bcryptjs'
import dotenv from 'dotenv'
import userRouter from "./routes/user.route.js";
import authRouter from './routes/auth.route.js'

const app = express();
app.use(express.json())
dotenv.config()

mongoose.connect(process.env.MONGO).then(()=>{
   console.log("connected to mongodb");
   
}).catch(()=>{
  console.log("mongodb fails");
})

// middlewares
app.use("/api/user", userRouter)
app.use("/api/auth", authRouter)


app.listen(4000, () => {
  console.log("Server is running on port 4000!!");
});






 
