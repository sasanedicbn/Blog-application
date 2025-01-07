import modelBlog from "../model/modelBlog.js";

export const createBlog = async (req, res) => {
  try {
    const newUser = new modelBlog(req.body);
    const { text } = newUser;

    const userExist = await modelBlog.findOne({ text });
    if (userExist) {
      return res.status(400).json({ message: "Blog already exist" });
    }
    const savedData = await newUser.save();
    res.status(200).json(savedData);
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};

export const getAllPosts = async (req, res) => {
  try {
    const blogPosts = await modelBlog.find();
    if (!blogPosts || blogPosts.length === 0) {
      return res.status(404).json({ message: "Blog posts not found" });
    }
    res.status(200).json(blogPosts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getPostById = async (req, res) => {
  try {
    const id = req.params.id;
    const singlePost = await modelBlog.findById(id);
    if (!singlePost) {
      return res.status(404).json({ message: "Blog posts not found" });
    }

    res.status(200).json(singlePost);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
