const jwt = require("jsonwebtoken");

function generateAccessToken(user) {
  return jwt.sign(user, process.env.JWT_SECRET, { expiresIn: "30s" });
}

function generateRefreshToken(user) {
  return jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, { expiresIn: "1m" });
}

module.exports = {
  generateAccessToken,
  generateRefreshToken,
};
