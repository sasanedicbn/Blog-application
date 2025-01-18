import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  user: {
    // type: String,
    // required: true,
    type: mongoose.Schema.Types.ObjectId,
    // required:true,
    ref: "User",
  },
  text: {
    type: String,
    required: true,
  },
});

export default mongoose.model("blogs", blogSchema);
