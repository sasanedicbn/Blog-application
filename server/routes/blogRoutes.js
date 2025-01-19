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

route.post("/blog", createBlog);
route.get("/blogs", protect, getAllPosts);
route.get("/blogs/:id", getPostById);
route.put("/blogs/blog/:id", updateBlog);
route.delete("/delete/blog/:id", deleteBlog);

export default route;
