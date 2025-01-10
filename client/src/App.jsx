function App() {
  const [blog, setBlog] = useState([]);

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

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className="app">
      <Header />
      <div className="content">
        <main className="main">
          {blog.length > 0 ? (
            blog.map((post, index) => (
              <BlogPost
                key={index} // Ključ za svaki blog post (preporučuje se jedinstveni ID iz baze)
                title={post.title}
                author={post.author}
                content={post.content}
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
