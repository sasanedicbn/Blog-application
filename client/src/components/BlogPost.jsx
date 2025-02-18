import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { getSinglePost, updateBlog } from "./API/API";
import { useEffect, useState } from "react";
import BlogFormModal from "./BlogFormModal";
import { toast } from "react-toastify";

function BlogPost({ title, author, content, id, deletePost }) {
  const [isEdit, setisEditing] = useState(false);
  const [editData, setEditData] = useState(null);

  const updatePostHandler = async () => {
    try {
      const data = await getSinglePost(id);
      setEditData(data);
      setisEditing(true);
    } catch (error) {
      console.error("Greška prilikom preuzimanja podataka:", error);
    }
  };

  const closeModal = () => {
    setisEditing(false);
    setEditData(null);
  };

  const sendEditedBlog = async (id, blogData) => {
    try {
      const response = await updateBlog(id, blogData);
      if (response) {
        const updatedPost = await getSinglePost(id);
        console.log("trtr", updatedPost);

        setEditData(updatedPost);
        setisEditing(false);
      }
      return response;
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <article className="blog-post">
      <div className="blog-header">
        <h2 className="blog-title">{title}</h2>
        <div className="blog-actions">
          <FaEdit onClick={updatePostHandler} title="Edit" />
          {isEdit && (
            <BlogFormModal
              isOpen={isEdit}
              onClose={closeModal}
              onSubmit={(blogData) => sendEditedBlog(id, blogData)}
              isEdit={true}
              formData={editData}
            />
          )}
          <FaTrashAlt onClick={() => deletePost(id)} title="Delete" />
        </div>
      </div>
      <p className="blog-author">By {author}</p>
      <p className="blog-content">{content}</p>
    </article>
  );
}

export default BlogPost;
