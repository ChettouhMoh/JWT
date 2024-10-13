const mongoose = require("mongoose");
const { Schema } = mongoose;

const commentSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User", required: true }, // Reference to the user who commented
  content: { type: String, required: true }, // Comment text
  createdAt: { type: Date, default: Date.now },
});

const blogSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: Schema.Types.ObjectId, ref: "User", required: true }, // Reference to the user who wrote the blog
  likes: [{ type: Schema.Types.ObjectId, ref: "User" }], // List of users who liked the blog
  comments: [commentSchema], // Embedded comments schema
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Blog", blogSchema);
