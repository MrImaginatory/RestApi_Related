import {asyncHandler} from "../utils/asyncHandler.js";
import User from "../model/user.model.js";
import mongoose from "mongoose";

const updateUser = asyncHandler( async(req,res)=>{
    const {id} = req.params;
    const {first_name,last_name,email,password,gender} = req.body;

    if(!first_name||!last_name||!email||!gender){
        res.status(404).json({message:"Please fill out all the required Fields"});
    }

    const hashedPassword = await bcrypt.hash(password,10);

    const updateData = {
        first_name,
        last_name,
        email,
        gender,
    }

    if(hashedPassword){
        updateData.password = hashedPassword;
    }

    const updateUserData = await User.findOneAndUpdate(id,updateData,{new:true});

    if(!updateUserData){
        res.status(404).json({message:"No matching data found to Update"});
    }

        res.status(200).json({message:"Data updated Successfully"});
});

const deleteUser = asyncHandler( async(req,res)=>{
    const {id} = req.params;

    const deleteUserData = await User.findByIdAndDelete(id);

    if(!deleteUserData){
        res.status(404).json({message:"No user Found for Deletion"});
    }

    res.status(200).json({message:"Data deleted SuccessFully"});
})

const searchData = asyncHandler( async(req,res)=>{
    const { id , email } = req.query;

    if(!id && !email) {
        res.status(400).json({message:"Either id of email is required to search Data"})
    }

    let userData;

    if(id){
        userData = await User.findById(id);
    }

    if(email){
        userData = await User.findOne({ email : email });
    }

    if(!userData){
        res.status(404).json({message:"User Not Found!"});
    }

    res.status(200).json({message:"User Found", userData});
})

export { updateUser , deleteUser , searchData };