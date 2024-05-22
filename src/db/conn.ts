import mongoose from "mongoose";

const dbHost = process.env.DB_HOST || "mongodb://localhost:27017";
const dbName = process.env.DB_NAME || "arubasmartmap";
const dbConnectionString = `${dbHost}/${dbName}`;

let dbConnected = false;

const connectDB = async () => {
  if (dbConnected) {
    return { success: true, message: "MongoDB already connected" };
  }
  try {
    await mongoose.connect(dbConnectionString);
    dbConnected = true;
    return { success: true, message: "MongoDB connected" };
  } catch (error: unknown) {
    console.log("🚀 ~ connectDB ~ error:", error);
    return { success: false, message: error };
  }
};

export default connectDB;
