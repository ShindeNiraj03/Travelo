
import Booking from "../models/Booking.js";




export const createBooking = async(req,res)=>{

     const newBooking = new Booking(req.body)
     try {
         const savedBooking  = await newBooking.save()
         res.status(200).json({success:true, message:'Your Tour is Booked',savedBooking}) 
     } catch (err) {
          res.status(500).json({success:false, message:'Internal Server error'}) 
     }
}