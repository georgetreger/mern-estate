import express from 'express'
import dotenv from 'dotenv'
import mongoose, { connect } from 'mongoose';
import userRoute from './routes/user.route.js'
import authRoute from './routes/auth.route.js'
import cookieParser from 'cookie-parser';
import cors from 'cors'

const app = express()

 dotenv.config()
//   middlewares 
   app.use(express.json())
   app.use(cookieParser())
    app.use(cors())
   app.use('/api/user', userRoute);
   app.use("/api/auth", authRoute)

  app.use((err, req, res,next)=>{
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error'
     return res.status(statusCode).json({
        success: false,
        statusCode,
        message
     })
  }) 
mongoose.connect(process.env.MONGO).then(()=>{
    console.log("Conneted to Mongodb");
}).catch((err)=>{
    console.log("not connected to mongodb");
})
app.listen(5000, ()=>{
    console.log("Server is running on port 5000");
})