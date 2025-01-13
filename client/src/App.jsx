import { useEffect, useState } from "react";
import BlogPost from "./components/BlogPost";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { deletePost, fetchBlogs, sendBlogData } from "./components/API/API";

function App() {
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    const fetchAllBlogs = async () => {
      const blogs = await fetchBlogs();
      if (blogs) {
        setBlog(blogs);
      }
    };
    fetchAllBlogs();
  }, []);

  const deletePostHandler = async (id) => {
    const deletedPost = await deletePost(id);
    if (deletePost) {
      setBlog((prevBlogs) => prevBlogs.filter((blog) => blog._id !== id));
    }
  };

  const sendBlogDataHandler = async (blogData) => {
    const sendData = await sendBlogData(blogData);
    if (sendData) {
      setBlog((prevBlogs) => [...prevBlogs, sendData]);
    }
  };

  return (
    <div className="app">
      <Header sendBlogData={sendBlogDataHandler} />
      <div className="content">
        <main className="main">
          {blog.length > 0 ? (
            blog.map((post, index) => (
              <BlogPost
                key={post._id}
                id={post._id}
                title={post.title}
                author={post.user}
                content={post.text}
                deletePost={deletePostHandler}
              />
            ))
          ) : (
            <p>Loading blog posts...</p>
          )}
        </main>
        <Sidebar />
      </div>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}

export default App;
