import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
     {
          userEmail:{
               type:String,
          },
          fullname:{
               type:String,
          },
          tourName:{
               type:String
          },
          guestSize:{
               type: Number,
               required:true,
          },
          phone:{
               type:Number,
               required:true,
          },
          bookAt:{
               type:Date ,
               required:true,
          }
     }
);

export default mongoose.model("Booking",bookingSchema);