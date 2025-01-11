import { useState } from "react";

const BlogFormModal = ({ isOpen, onClose, onSubmit, isEdit }) => {
  const [formData, setFormData] = useState({
    title: "",
    user: "",
    text: "",
  });
  const [editFormData, setEditFormData] = useState({
    title: "",
    user: "",
    text: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ title: "", user: "", text: "" });
    onClose();
  };

  console.log(formData, "formData");
  const saveEditingHandler = async () => {};
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <h2 className="form-title">Add New Blog Post</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              name="title"
              value={isEdit ? editFormData.title : formData.title}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="author">Author:</label>
            <input
              type="text"
              id="author"
              name="user"
              value={isEdit ? editFormData.user : formData.user}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="content">Content:</label>
            <textarea
              id="content"
              name="text"
              value={isEdit ? editFormData.text : formData.text}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          {isEdit ? (
            <button type="submit" className="btn-add">
              Add Blog
            </button>
          ) : (
            <button className="btn-add" onClick={saveEditingHandler}>
              Save
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default BlogFormModal;
