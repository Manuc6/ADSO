import mongoose from "mongoose";
const userSchema = new mongoose.Schema ({
    username: {
    type: String,
    required: true,
    trim: true //se una para borrar espacios en blanco
    },
    email: {
        type: String,
        unique:true,
        require: true,
        trim: true
    },
    password: {
        type: String,
        require:true
    }
},{
    timestamps: true //createdAT and update
});
 
export default mongoose.model("User, userSchema");