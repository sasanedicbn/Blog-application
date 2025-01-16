import express from "express";
import {
  getMe,
  loginUser,
  registerUser,
} from "../controller/userController.js";

const routeUser = express.Router();

routeUser.post("/", registerUser);
routeUser.post("/login", loginUser);
routeUser.get("/me", getMe);
export default routeUser;
