import express from "express";
import {
  createBlog,
  deleteBlog,
  getAllPosts,
  getPostById,
  updateBlog,
} from "../controller/blogController.js";
import { protect } from "../middleware/authMiddleware.js";

const route = express.Router();

route.post("/blog", protect, createBlog);
route.get("/blogs", protect, getAllPosts);
route.get("/blogs/:id", protect, getPostById);
route.put("/blogs/blog/:id", protect, updateBlog);
route.delete("/delete/blog/:id", protect, deleteBlog);

export default route;
