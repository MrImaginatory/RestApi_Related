import mongoose from "mongoose";

const dataSchema = new mongoose.Schema({
    first_name: { 
        type: String, 
        required: true },
    last_name: { 
        type: String, 
        required: true },
    email: { 
        type: String, 
        required: true, 
        unique: true, 
        match: /.+\@.+\..+/ },
    number: { 
        type: Number, 
        required: true, 
        min: 1000000000, 
        max: 9999999999 },
    gender: { 
        type: String, 
        enum: ["Male", "Female", "Other"],
        required: true }
}, { timestamps: true });

export default mongoose.model("Data",dataSchema)