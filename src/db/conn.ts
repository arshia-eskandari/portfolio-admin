import mongoose from "mongoose";

const dbHost = process.env.DB_HOST || "mongodb://localhost:27017";
const dbName = process.env.DB_NAME || "arubasmartmap";
const dbConnectionString = `${dbHost}/${dbName}`;

let dbConnected = false;

const connectDB = async () => {
  if (dbConnected) {
    return;
  }
  try {
    await mongoose.connect(dbConnectionString);
    dbConnected = true;
    console.log("MongoDB connected");
  } catch (error: unknown) {
    console.log("🚀 ~ connectDB ~ error:", error);
    process.exit(1);
  }
};

export default connectDB;
