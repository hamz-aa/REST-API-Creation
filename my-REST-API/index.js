import express from "express";
import dotenv from "dotenv";
import usersRoute from "./routes/users.js";
import mongoose from "mongoose";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

mongoose.connect(process.env.MONGODB_URI);

app.use(express.json());
app.use("/api/users", usersRoute);

app.listen(PORT, () => {
  console.log(`Server Started at http://localhost:${PORT}`);
});
