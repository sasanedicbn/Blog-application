import { FaEdit, FaTrashAlt, FaSyncAlt } from "react-icons/fa";
import { getSinglePost } from "./API/API";
import { useEffect, useState } from "react";

function BlogPost({ title, author, content, id, deletePost }) {
  const [isEdit, setisEditing] = useState(false);

  const updatePostHandler = async (id) => {
    await getSinglePost(id);
  };

  return (
    <article className="blog-post">
      <div className="blog-header">
        <h2 className="blog-title">{title}</h2>
        <div className="blog-actions">
          <FaEdit onClick={updatePostHandler} title="Edit" />
          <FaTrashAlt onClick={() => deletePost(id)} title="Delete" />
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
