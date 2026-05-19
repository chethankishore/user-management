import exp from 'express'
import { connect } from 'mongoose'
import { UserApp } from './API\'S/userAPI.js'
import { config } from 'dotenv'
import cors from 'cors'



config()
const app=exp()

app.use(cors({
  origin:['http://localhost:5173','https://user-management-app-weld-three.vercel.app']
}))
app.use(exp.json())

app.use('/user-api',UserApp)
async function connectDB(){
    try{
        await connect(process.env.DB_URL)
        console.log('succesfully connected to DB..')
        app.listen(process.env.PORT,()=>console.log(`server is listening to ${process.env.PORT}....`))
    }catch(err){
        console.log('Failed to connect DB ',err)
    }
}
connectDB()

app.use((err, req, res, next) => {
  // Mongoose validation error
  if (err.name === "ValidationError") {
    return res.status(400).json({
      message: "Validation failed",
      errors: err.errors,
    });
  }
  // Invalid ObjectId
  if (err.name === "CastError") {
    return res.status(400).json({
      message: "Invalid ID format",
    });
  }
  // Duplicate key
  if (err.code === 11000) {
    return res.status(409).json({
      message: "Duplicate field value",
    });
  }
  res.status(500).json({
    message: "Internal Server Error",
    payload:err.message
  });
});


