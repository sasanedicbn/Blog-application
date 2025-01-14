import { useState, useEffect } from "react";

const BlogFormModal = ({
  isOpen,
  onClose,
  onSubmit,
  isEdit,
  formData: initialData,
}) => {
  const [formData, setFormData] = useState({
    title: "",
    user: "",
    text: "",
  });

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    }
  }, [initialData]);

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

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <h2 className="form-title">
          {isEdit ? "Edit Blog Post" : "Add New Blog Post"}
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
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
              value={formData.user}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="content">Content:</label>
            <textarea
              id="content"
              name="text"
              value={formData.text}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="btn-add">
            {isEdit ? "Save Changes" : "Add Blog"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default BlogFormModal;
