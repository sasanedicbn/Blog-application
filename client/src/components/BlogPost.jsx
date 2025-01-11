import { FaEdit, FaTrashAlt, FaSyncAlt } from "react-icons/fa";

function BlogPost({ title, author, content, id }) {
  console.log(id, "jel to taj");
  const deletePost = async () => {
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
      console.log("Blog post deleted:", result);
    } catch (error) {
      console.error("Error deleting blog post:", error);
    }
  };

  return (
    <article className="blog-post">
      <div className="blog-header">
        <h2 className="blog-title">{title}</h2>
        <div className="blog-actions">
          <FaEdit
            onClick={() => {
              console.log("sasa");
            }}
            title="Edit"
          />
          <FaTrashAlt onClick={deletePost} title="Delete" />
          <FaSyncAlt
            onClick={() => {
              console.log("sasa");
            }}
            title="Update"
          />
        </div>
      </div>
      <p className="blog-author">By {author}</p>
      <p className="blog-content">{content}</p>
    </article>
  );
}

export default BlogPost;
