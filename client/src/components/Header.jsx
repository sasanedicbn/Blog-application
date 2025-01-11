import { useState } from "react";
import BlogFormModal from "./BlogFormModal";

function Header() {
  const [openModal, setOpenModal] = useState(false);
  const [newBlogData, setNewBlogData] = useState([]);

  console.log(newBlogData, "newBlogData");
  const openModalHandler = () => {
    setOpenModal(true);
  };

  const closeModalHandler = () => {
    setOpenModal(false);
  };

  return (
    <header className="header">
      <h1>My Blog</h1>
      <button onClick={openModalHandler}>NEW BLOG</button>
      {openModal && (
        <BlogFormModal
          isOpen={openModal}
          onClose={closeModalHandler}
          onSubmit={(newBlog) => {
            setNewBlogData(newBlog);
            closeModalHandler();
          }}
        />
      )}
    </header>
  );
}

export default Header;
