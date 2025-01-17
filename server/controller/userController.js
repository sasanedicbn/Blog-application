import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import asyncHandler from "express-async-handler";
import User from "../model/userModel.js";
// desc Register new user
// route POST api/users
// acess Public
export const registerUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400);
    throw new Error("Please add all fields");
  }
  const userExist = await User.findOne({ email });

  if (userExist) {
    res.status(400);
    throw new Error("User already exists");
  }

  // Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // Create user
  const user = await User.create({
    email,
    password,
    hashedPassword,
  });

  if (user) {
    res.status(201).json({
      _id: user.id,
      email: user.email,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});
// desc Authenticate  a user
// route POST api/users/login
// acess Public
export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  // Check for user email
  const user = User.findOne({ email });
  if (user && (await bcrypt.compare(password, user.password))) {
    res.status(201).json({
      _id: user.id,
      email: user.email,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
};
// desc Get user data
// route GET api/users/me
// acess Public
export const getMe = async (req, res) => {
  res.json({ message: "User data display" });
};
