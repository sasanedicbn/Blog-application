import express from "express";
import { createBlog } from "../controller/blogController";

const route = express.Router();

route.post("/blog", createBlog);

export default route;
