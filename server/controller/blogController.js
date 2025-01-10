import modelBlog from "../model/modelBlog.js";

export const createBlog = async (req, res) => {
  try {
    const newUser = new blogSchema(req.body);
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
    console.log(blogPosts, "consola");
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

export const updateBlog = async (req, res) => {
  try {
    const id = req.params.id;
    const singlePost = await modelBlog.findById(id);
    if (!singlePost) {
      return res.status(404).json({ message: "Blog posts not found" });
    }
    const updatedPost = modelBlog
      .findByIdAndUpdate(id, req.body, {
        new: true,
      })
      .lean();
    res.status(200).json(updatedPost);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteBlog = async (req, res) => {
  try {
    const id = req.params.id;
    const singlePost = await modelBlog.findById(id);
    if (!singlePost) {
      return res.status(404).json({ message: "Single post doesn't existing" });
    }
    await modelBlog.findByIdAndDelete(id);
    res.status(200).json({ message: "User deleted succesufully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
