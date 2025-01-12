
 export const getSinglePost = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/blogs/${id}`);

      if (!response.ok) {
        throw new Error("Failed to get single post");
      }
      const result = await response.json();
      return result;
    } catch (error) {
      console.error("Error deleting blog post:", error);
    }
  };