const mongoose = require("mongoose");

const refreshTokenSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  refreshToken: { type: String, required: true },
  createdAt: { type: Date, default: Date.now, expires: "7d" }, // Automatically delete after 7 days
});
module.exports = mongoose.model("RefreshToken", refreshTokenSchema);
