import mongoose from "mongoose";

const couponSchema = new mongoose.Schema({
    code:{
        type:String,
        required:true,
        unique:true,
    },
    discountType:{
        type:String,
        enum:['percentage','fixed'],
        required:true,
    },
    discountValue:{
        type:Number,
        required:true,
    },
    minOrderValue:{
        type:Number,
        default:0,
    },
    maxDiscount:{
        type:Number,
        default:null,
    },
    usageLimit:{
        type:Number,
        default:1,
    },
    expiryDate:{
        type:Date,
        required:true,
    },
    isActive:{
        type:Boolean,
        default:true,
    }
},{timestamps:true});

export default mongoose.model("coupon",couponSchema);