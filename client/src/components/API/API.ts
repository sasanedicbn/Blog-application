import { toast } from "react-toastify";

 export const getSinglePost = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/blogs/${id}`);

      if (!response.ok) {
        throw new Error("Failed to get single post");
      }
      const result = await response.json();
      return result;
    } catch (error) {
      console.error("Error deleting blog post:", error);
    }
  };

 export const fetchBlogs = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/blogs");
      const data = await response.json();
      return data;
    } catch (error) {
      toast.error("Failed to load blog posts.");
    }
  };

  export const deletePost = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/delete/blog/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete post");
      }
      const result = await response.json();
      return result;
      toast.success("Blog post deleted successfully!");
    } catch (error) {
      toast.error("Failed to delete blog post.");
    }
  };