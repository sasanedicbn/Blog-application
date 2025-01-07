import express from "express";
import {
  createBlog,
  getAllPosts,
  getPostById,
} from "../controller/blogController.js";

const route = express.Router();

route.post("/blog", createBlog);
route.get("/blogs", getAllPosts);
route.get("/blogs/:id", getPostById);

export default route;
