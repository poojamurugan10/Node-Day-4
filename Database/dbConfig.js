import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async() => {
    try{
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("MongoDB connected successfully");

    }catch (error){
        console.error(error);

    }
}; 
console.log("MONGODB_URL:", process.env.MONGODB_URL);

export default connectDB;