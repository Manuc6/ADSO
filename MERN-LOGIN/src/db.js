import mongoose from "mongoose";

export const connect = async ()=>{
    try{
        await mongoose.connect("mongodb://127.0.0.1/mernLogin");
        console.log(">> DB Connect ");
    }catch(error){
        console.log(error)
    }
}