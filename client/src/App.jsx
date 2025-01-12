import { useEffect, useState } from "react";
import BlogPost from "./components/BlogPost";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function App() {
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/blogs");
        const data = await response.json();
        console.log(data, "risponz");
        setBlog(data);
      } catch (error) {
        console.log("Error", error);
      }
    };
    fetchBlogs();
  }, []);

  const deletePost = async (id) => {
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
      setBlog((prevBlogs) => prevBlogs.filter((blog) => blog._id !== id));
      console.log("Blog post deleted:", result);
    } catch (error) {
      console.error("Error deleting blog post:", error);
    }
  };

  const sendBlogData = async (blogData) => {
    console.log(blogData, "ovo su dolazni");
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
      setBlog((prevBlogs) => [...prevBlogs, result]);
      console.log("Uspješno sam dodao:", result);
      return result;
    } catch (error) {}
  };

  return (
    <div className="app">
      <Header sendBlogData={sendBlogData} />
      <div className="content">
        <main className="main">
          {blog.length > 0 ? (
            blog.map((post, index) => (
              <BlogPost
                key={index}
                id={post._id}
                title={post.title}
                author={post.user}
                content={post.text}
                deletePost={deletePost}
              />
            ))
          ) : (
            <p>Loading blog posts...</p>
          )}
        </main>
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
