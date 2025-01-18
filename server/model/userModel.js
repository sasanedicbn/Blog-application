import mongoose from "mongoose";

const userModel = new mongoose.Schema({
  email: {
    type: String,
    require: [true, "Please add an email"],
    unique: true,
  },
  password: {
    type: String,
    require: [true, "Please add an password"],
  },
});
export default mongoose.model("User", userModel);
