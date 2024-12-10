import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    first_name:{
        type:String,
        required:true,
        minLength:2,
        maxLength:16
    },
    last_name:{
        type:String,
        required:true,
        minLength:2,
        maxLength:16
    },
    email:{
        type:String,
        unique:true,
        lowercase:true,
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
        minLength:10,
        maxLength:15,
    },
    gender:{
        type:String,
        enum:["male","female","other"],
        set:(value)=>value.toLowerCase()
    }
},{timestamps:true})

export default mongoose.model("userData",userSchema);