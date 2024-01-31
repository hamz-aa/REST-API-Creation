import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },
    password: {
      type: String,
      min: 6,
      required: true,
    },
    age: {
      type: Number,
    },
    desc: {
      type: String,
      max: 50,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("User", UserSchema);
