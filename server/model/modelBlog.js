import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
  user: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Blogs", blogSchema);
