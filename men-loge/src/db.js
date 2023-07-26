import mongoose from "mongose";
import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1/loginmern");
        console.log(">> Database Connected");

    } catch (error) {
        console.log (error);
    }
}