import { FaEdit, FaTrashAlt, FaSyncAlt } from "react-icons/fa";
import { getSinglePost } from "./API/API";
import { useEffect, useState } from "react";
import BlogFormModal from "./BlogFormModal";

function BlogPost({ title, author, content, id, deletePost }) {
  const [isEdit, setisEditing] = useState(false);
  const [editData, setEditData] = useState(null); // Čuva podatke za uređivanje

  const updatePostHandler = async () => {
    try {
      const data = await getSinglePost(id);
      console.log("Podaci za edit:", data);
      setEditData(data); // Postavi podatke
      setisEditing(true); // Otvori modal
    } catch (error) {
      console.error("Greška prilikom preuzimanja podataka:", error);
    }
  };

  const closeModal = () => {
    setisEditing(false);
    setEditData(null); // Resetuj podatke kada se modal zatvori
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
              onSubmit={(updatedData) =>
                console.log("Updated data:", updatedData)
              }
              isEdit={true}
              formData={editData} // Prosledi podatke za uređivanje
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
