import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import { asyncHandler } from "../utils/asyncHandler.js"
import User from "../model/user.model.js";

const loginController = asyncHandler(async(req,res)=>{
    const {email, password} = req.body;

    const userData = await User.findOne({email});
    
    if(!userData){
        res.status(404).json("User Does not exists!");
    }

    if(userData){
        const match = await bcrypt.compare(password,userData.password);

        if(!match){
            res.status(404).json("UserId or Password Invalid. Try Again!");
        }
        
        jwt.sign({email:userData.email},"Secret_Key",(err,token)=>{
            if(!err){
                const jwtToken = token;
                res.cookie('jwtToken',jwtToken,{httpOnly:true,secure:true,maxAge:(1*60*3600)})
                    .status(200)
                    .json({message:"User Login successful"});
            }
        })
    }
});

const signUpController = asyncHandler( async(req,res)=>{
    const {email, password} = req.body;

    const userExists = await User.findOne({email});

    if(userExists){
        res.status(403).json({message:"User Already Exists!"});
    }

    const hashedPassword = await bcrypt.hash(password,10);

    const newUser = new User({email:email,password:hashedPassword});

    await newUser.save();

    res.status(201).json({message:"User created Successfully"});
})

export {loginController, signUpController};