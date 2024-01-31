import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import helmet from "helmet";
import morgan from "morgan";
import userRoute from "./routes/users.js";
import authRoute from "./routes/auth.js";
import postRoute from "./routes/posts.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8800;

mongoose.connect(process.env.MONGO_URL);

// middlewares
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/posts", postRoute);

app.listen(PORT, () =>
  console.log(`Server Started at http://localhost:${PORT}`)
);
