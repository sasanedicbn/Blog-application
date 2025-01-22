import express from "express";
import {
  getMe,
  loginUser,
  registerUser,
} from "../controller/userController.js";
import { protect } from "../middleware/authMiddleware.js";
const routeUser = express.Router();

routeUser.post("/login", registerUser);
routeUser.post("/login", loginUser);
routeUser.get("/me", protect, getMe);
export default routeUser;
