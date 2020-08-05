import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      unique: true,
      required: true
    },
    username: {
      type: String,
      unique: true,
      required: true
    }
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
