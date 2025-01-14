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

  export const sendBlogData = async (blogData) => {
    try {
      const response = await fetch("http://localhost:5000/api/blog", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(blogData),
      });
      if (!response.ok) {
        throw new Error("Failed to add blog post");
      }

      const result = await response.json();
      toast.success("Blog post added successfully!");
      return result;
    } catch (error) {
      toast.error("Failed to add blog post.");
    }
  };

  export const updateBlog = async (id, blogData) => {
    console.log(id, blogData, 'asd ovdje')
    try {
      const response = await fetch(`http://localhost:5000/api/blogs/blog/${id}`, {
        method: "PUT", 
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(blogData), 
      });
  
      if (!response.ok) {
        throw new Error("Failed to update blog post");
      }
  
      const result = await response.json();
      toast.success("Blog post updated successfully!");
      return result;
    } catch (error) {
      console.error("Error while updating blog post:", error);
      toast.error("Failed to update blog post.");
    }
  };
  