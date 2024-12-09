import connectDB from "./database/db.js";
import {app} from "./app.js";
import dotenv from "dotenv";
import fs from "fs";

dotenv.config();

const PORT = process.env.PORT || 3002;

connectDB()
    .then(()=>{
        app.listen(PORT, ()=>{
            console.log(`Server up and Running at http://localhost:${PORT}`);
        })
    })
    .catch((error)=>{
        console.log("Error: ",error);
    })

if(!fs.existsSync('./uploads')){
    fs.mkdirSync('./uploads');
}