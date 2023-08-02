import mongoose from "mongoose";

export const connectDB=async()=>{
    try {
        await mongoose.connect("mongodb://127.0.0.1/mernlogin");
        console.log("<<  DATA BASE CONNECT");
    } catch (error) {
        console.log(error)
    }
}