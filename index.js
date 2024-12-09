import connectDB from "./database/db.js";
import {app} from "./app.js";
import dotenv from "dotenv";

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