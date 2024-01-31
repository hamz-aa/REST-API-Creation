import express from "express";
import {
  addUserController,
  getAllUsersController,
  getUserController,
} from "../controllers/users.js";

const router = express.Router();

// get all users
router.get("/", getAllUsersController);

// get a single user
router.get("/:id", getUserController);

// add user to database
router.post("/post", addUserController);

export default router;
