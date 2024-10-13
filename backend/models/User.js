const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, required: true },
  bio: { type: String },
  followers: [{ type: Schema.Types.ObjectId, ref: "User" }], // List of users following this user
  following: [{ type: Schema.Types.ObjectId, ref: "User" }], // List of users this user is following
  blogs: [{ type: Schema.Types.ObjectId, ref: "Blog" }], // List of blog posts created by this user
  createdAt: { type: Date, default: Date.now },
});
module.exports = mongoose.model("User", userSchema);
