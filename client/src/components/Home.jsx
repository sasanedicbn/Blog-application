import { useEffect, useState } from "react";
import { deletePost, fetchBlogs, sendBlogData } from "./API/API";
import BlogPost from "./BlogPost";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Home = () => {
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
    </div>
  );
};

export default Home;
