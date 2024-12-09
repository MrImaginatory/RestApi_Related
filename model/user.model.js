import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email:{
        type:String,
        unique:true,
        toLowerCase:true,
        match:/.+\@.+\..+/ ,
        required:true
    },
    password:{
        type:String,
        minLength:3,
        required:true
    },
    phoneNumber:{
        type:Number,
        min:999999999,
        max:9999999999,
    },
    gender:{
        type:String,
        enum:["Male","Female","Other"],
    }
},{timestamps:true})

export default mongoose.model("userCredential",userSchema);