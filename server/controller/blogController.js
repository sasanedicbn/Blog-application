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
