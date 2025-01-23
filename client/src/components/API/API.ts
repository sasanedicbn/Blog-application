import { toast } from "react-toastify";

 export const getSinglePost = async (id) => {
  const token = localStorage.getItem("token")

    try {
      const response = await fetch(`http://localhost:5000/api/blogs/${id}`,{
        method:'GET',
        headers:{
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, 
        }
      });

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
  const token = localStorage.getItem("token")

    try {
      const response = await fetch("http://localhost:5000/api/blogs",{
        method:'GET',
        headers:{
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, 
        }
      });
      const data = await response.json();
      console.log(data, 'za fetchblogs')
      return data;
    } catch (error) {
      toast.error("Failed to load blog posts.");
    }
  };

  export const deletePost = async (id) => {
    const token = localStorage.getItem("token")

    try {
      const response = await fetch(
        `http://localhost:5000/api/delete/blog/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, 
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
    console.log('podaci za slanje', blogData)
    const token = localStorage.getItem("token")
    try {
      const response = await fetch("http://localhost:5000/api/blog", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, 
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
    const token = localStorage.getItem("token")

    try {
      const response = await fetch(`http://localhost:5000/api/blogs/blog/${id}`, {
        method: "PUT", 
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, 
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
  // API ABOUT USER

  export const registerUser = async (credetinals) => {
    console.log('podaci za slanje', credetinals)
    try {
      const response = await fetch("http://localhost:5000/api/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credetinals),
      });
      if (!response.ok) {
        throw new Error("Failed to add blog post");
      }

      const result = await response.json();
      const token =  result.token
      localStorage.setItem('token', token)
      toast.success("Register uccessfully!");
      return result;
    } catch (error) {
      toast.error("Failed to register user.");
    }
  };
  export const loginUser = async (credentials) => {
    console.log("Podaci za slanje:", credentials);
  
    try {
      const response = await fetch("http://localhost:5000/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", 
        },
        body: JSON.stringify(credentials), 
      });
  
      if (!response.ok) {
        throw new Error("Failed to login user");
      }
  
      const result = await response.json(); 
      const token = result.token; 
  
      if (token) {
        localStorage.setItem("token", token);
        console.log("Sačuvan token:", token);
      }
  
      console.log(result, "Ovo je rezultat od logina");
      toast.success("User logged in successfully!");
      return result; 
    } catch (error) {
      console.error("Failed to login user:", error.message);
      toast.error("Failed to login user.");
    }
  };
  