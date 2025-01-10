import { FaEdit, FaTrashAlt, FaSyncAlt } from "react-icons/fa";

function BlogPost({ title, author, content, onEdit, onDelete, onUpdate }) {
  return (
    <article className="blog-post">
      <div className="blog-header">
        <h2 className="blog-title">{title}</h2>
        <div className="blog-actions">
          <FaEdit onClick={onEdit} title="Edit" />
          <FaTrashAlt onClick={onDelete} title="Delete" />
          <FaSyncAlt onClick={onUpdate} title="Update" />
        </div>
      </div>
      <p className="blog-author">By {author}</p>
      <p className="blog-content">{content}</p>
    </article>
  );
}

export default BlogPost;
