import mongoose from "mongoose";

export const connectDB = async() => {
    let cachedDB = null;

    if (cachedDB) {
        return cachedDB;
    }else{
        const newDB = await mongoose.connect(process.env.MONGO_URI);
        cachedDB = newDB;
        console.log("Database connected Successfully");
        return newDB;
    }
};