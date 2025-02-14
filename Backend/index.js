import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import bookingRoute from './routes/booking.js';

dotenv.config()
const app =express()

const port =process.env.PORT || 8000;


mongoose.set('strictQuery',false)
const connect = async()=>{
     try {
          await mongoose.connect(process.env.MONGO_URI,{
               useNewUrlParser:true,
               useUnifiedTopology:true
          })
          console.log('Mongo DB database connected')
     } catch (err) {
          console.log('Failed to connect.')
     }
}

app.get('/',(req,res)=>{
     res.send('api is working')
})


app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.use("/api/v1/booking",bookingRoute);

app.listen(port, ()=>{
     connect();
     console.log('server is listening on port',port)
})