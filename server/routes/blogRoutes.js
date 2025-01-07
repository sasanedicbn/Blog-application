import express from "express";
import {
  createBlog,
  getAllPosts,
  getPostById,
  updateBlog,
} from "../controller/blogController.js";

const route = express.Router();

route.post("/blog", createBlog);
route.get("/blogs", getAllPosts);
route.get("/blogs/:id", getPostById);
route.put("/blogs/blog/:id", updateBlog);

export default route;
