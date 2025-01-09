import React from "react";
import Header from "./components/Header";
import BlogPost from "./components/BlogPost";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="content">
        <main className="main">
          <BlogPost
            title="First Blog Post"
            author="John Doe"
            content="This is the first blog post content."
          />
          <BlogPost
            title="Second Blog Post"
            author="Jane Doe"
            content="This is the second blog post content."
          />
        </main>
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
