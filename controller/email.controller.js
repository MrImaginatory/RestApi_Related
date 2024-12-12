import nodemailer from "nodemailer";
import fs from "fs";
import { asyncHandler } from "../utils/asyncHandler.js";

const nodeMailer = asyncHandler(async(req,res)=>{
    const transporter = nodemailer.createTransport({
        host: "",
        port: "",
        secure:"",
        auth:{
            user:"",
            pass:"",
        }
    })

    const info = await transporter.sendMail({
        from:"",
        to:"",
        subject:"",
        html:"",
        attachment:{
            filename:req.file.originalname,
            path:filePath,
        }
    })

    if(!info.response.includes('250')||!info.response.includes('OK')){
        console.error("Error sending Email");
        res.status(400).json({message:"Sending email failed",info: info.response});
    }
    
    fs.unlinkSync(filePath);
    res.status(200).json({message:"Email sent successfully",info: info.messageID})
})

export {nodeMailer};