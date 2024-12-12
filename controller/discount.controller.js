import coupon from "../model/coupon.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import mongoose from "mongoose";

const couponCodeCreation = asyncHandler(async (req,res) => {
    const {code,discountType,discountValue,minOrderValue,maxDiscount,usageLimit,expiryDate} = req.body;

    const newCoupon = await coupon.create({
        code,
        discountType,
        discountValue,
        minOrderValue,
        maxDiscount,
        usageLimit,
        expiryDate,
        isActive:true,
    })

    if(!newCoupon){
        res.status(400).json({message:"Error creating Coupon"});
    }

    res.status(200).json({message:"Created Coupon Successfully"});
})

const couponValidate = asyncHandler( async ( req , res ) => {
    const { code , cartValue } = req.body;

    const couponData = await coupon.findOne({code});


    if(!couponData){
        res.status(404).json({message:"Invalid Coupon Code"})
    }

    if(parseInt(cartValue) < couponData.minOrderValue){
        res.status(400).json({message:`coupon code valid above orders of ${couponData.minOrderValue}`});
    }

    if(new Date() > new Date(couponData.expiryDate)){
        res.status(400).json({message:`Sorry the coupon code expired on ${couponData.expiryDate}`});
    }

    let discount = 0;
    if(couponData.discountType === 'percentage'){
        discount = Math.min((cartValue*couponData.discountValue)/100, couponData.maxDiscount);
    }else if(couponData.discountType=='fixed'){
        discount = couponData.discountValue;
    }

    res.status(200).json({
        message:"valid Coupon",
        discount,
        finalAmount:cartValue-discount,
    })

})

export { couponCodeCreation , couponValidate }