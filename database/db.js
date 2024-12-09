import mongoose from "mongoose";

const MONGO_URL = process.env.MONGO_URI || "mongodb://localhost:27017";
const DATABASE_NAME = process.env.DATABASE ||"SampleDB";

const connectDB = async() =>{
    try {
        const connectionInstance = await mongoose.connect(`${MONGO_URL}/${DATABASE_NAME}`);
        // console.log(connectionInstance);
        console.log("Connected to Database Successfully at:", connectionInstance.connection._connectionString);
    } catch (error) {
        console.error("Error connecting to Database: ",error);
    }
}

export default connectDB;