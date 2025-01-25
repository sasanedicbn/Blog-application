import { useState } from "react";
import BlogFormModal from "./BlogFormModal";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Header({ sendBlogData }) {
  const [openModal, setOpenModal] = useState(false);
  const navigation = useNavigate();

  const openModalHandler = () => {
    setOpenModal(true);
  };

  const closeModalHandler = () => {
    setOpenModal(false);
  };

  const logoutHandler = () => {
    localStorage.removeItem("token");
    navigation("/login");
    toast.success("You are logged out!");
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
      <button onClick={() => logoutHandler()}>Log out</button>
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
