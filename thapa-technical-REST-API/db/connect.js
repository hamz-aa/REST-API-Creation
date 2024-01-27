import mongoose from "mongoose";

const connectDB = (uri) => {
  console.log("Connect DB");
  return mongoose.connect(uri);
};

export default connectDB;
