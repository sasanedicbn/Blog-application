import { useState } from "react";
import BlogFormModal from "./BlogFormModal";

function Header() {
  const [openModal, setOpenModal] = useState(false);

  const sendBlogData = async (blogData) => {
    console.log(blogData, "ovo su dolazni");
    try {
      const response = await fetch("http://localhost:5000/api/blog", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(blogData),
      });
      if (!response.ok) {
        throw new Error("Failed to add blog post");
      }

      const result = await response.json();
      console.log("Uspješno sam dodao:", result);
      return result;
    } catch (error) {
      console.error("Greška prilikom dodavanja bloga:", error);
    }
  };

  const openModalHandler = () => {
    setOpenModal(true);
  };

  const closeModalHandler = () => {
    setOpenModal(false);
  };

  const handleNewBlog = async (newBlog) => {
    const addedBlog = await sendBlogData(newBlog);
    if (addedBlog) {
      console.log("Blog je dodat:", addedBlog);
    }
    closeModalHandler();
  };

  return (
    <header className="header">
      <h1>My Blog</h1>
      <button onClick={openModalHandler}>NEW BLOG</button>
      {openModal && (
        <BlogFormModal
          isOpen={openModal}
          onClose={closeModalHandler}
          onSubmit={handleNewBlog}
        />
      )}
    </header>
  );
}

export default Header;
