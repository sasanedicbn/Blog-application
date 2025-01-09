function BlogPost({ title, author, content }) {
  return (
    <article className="blog-post">
      <h2 className="blog-title">{title}</h2>
      <p className="blog-author">By {author}</p>
      <p className="blog-content">{content}</p>
    </article>
  );
}

export default BlogPost;
