import mongoose,  from "mongoose";

const blogSchema = new mongoose.Schema({
  user: {
    type: String,
    require: true,
  },
  text: {
    type: String,
    require: true,
  },
});

export default mongoose.model("Blogs", blogSchema);
