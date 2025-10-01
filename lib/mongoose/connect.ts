import mongoose from "mongoose";

const mongo_key: string | undefined = process.env.MONGO_KEY;

async function connectDB() {
  if (!mongo_key) {
    throw new Error("mongo key not defined");
  }
  
  try {
    mongoose.connect(mongo_key);
  } catch (e) {
    console.log("could not connect", e);
  }
}

export default connectDB;