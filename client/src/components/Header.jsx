import { useState } from "react";
import BlogFormModal from "./BlogFormModal";

function Header({ sendBlogData }) {
  const [openModal, setOpenModal] = useState(false);

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
