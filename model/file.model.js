import mongoose from "mongoose";

const fileSchema = new mongoose.Schema({
    fileName:{
        type:String,
        required:true,
    },
    path:{
        type:String,
        required:true,
    },
    size:{
        type:String,
        required:true,
    },
    uploadDate:{
        type:Date,
        default:Date.now
    }
})

export default mongoose.model("fileDetail",fileSchema);