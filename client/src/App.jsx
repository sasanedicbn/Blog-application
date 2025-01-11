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

  console.log(blog, "blog");

  return (
    <div className="app">
      <Header />
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
