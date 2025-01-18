import express from "express";
import {
  getMe,
  loginUser,
  registerUser,
} from "../controller/userController.js";
import { protect } from "../middleware/authMiddleware.js";
const routeUser = express.Router();

routeUser.post("/", protect, registerUser);
routeUser.post("/login", protect, loginUser);

export default routeUser;
