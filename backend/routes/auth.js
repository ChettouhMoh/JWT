require("../config/db.config").connect();
const express = require("express");
const router = express.Router();
const User = require("../models/User");
const RefreshToken = require("../models/RefreshToken.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {
  generateAccessToken,
  generateRefreshToken,
} = require("../utils/generateToken");

// User registration
router.post("/register", async (req, res) => {
  try {
    const { username, password, role } = req.body;
    const roles = ["user", "writer", "admin"];
    const existingRole = roles.includes(role);

    if (!existingRole) {
      // check if given role is valid role
      return res.status(400).json({ error: "given role is not a valid one !" });
    }

    // Check if the username already exists in the database
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ error: "Username already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      username,
      role,
      password: hashedPassword,
    });

    const accessToken = generateAccessToken({ userId: user._id });
    const refreshToken = generateRefreshToken({ userId: user._id });
    await RefreshToken.create({
      userId: user._id,
      refreshToken,
    });

    res.status(201).json({
      accessToken,
      refreshToken,
    });
  } catch (err) {
    console.error("Registration failed:", err);
    res.status(500).json({ error: "registeration failed" });
  }
});

// User login
router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).json({ error: "Authentication failed" });
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ error: "Authentication failed" });
    }

    const accessToken = generateAccessToken({ userId: user._id });
    const refreshToken = generateRefreshToken({ userId: user._id });

    await RefreshToken.create({ userId: user._id, refreshToken });
    res.status(200).json({ accessToken, refreshToken });
  } catch (error) {
    res.status(500).json({ error: "Login failed" });
  }
});

// delete refresh token when user logout
router.post("/logout", async (req, res) => {
  const refreshToken = req.cookies.refreshToken;
  await RefreshToken.deleteOne({ refreshToken });
  res.sendStatus(204);
});

router.post("/refreshTok", async (req, res) => {
  try {
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) return res.sendStatus(401); // Unauthorized

    const tokenEntry = await RefreshToken.findOne({ refreshToken });
    if (!tokenEntry) return res.sendStatus(403); // Forbidden

    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
      if (err) return res.sendStatus(403); // Forbidden

      // Issue a new access token
      const accessToken = generateAccessToken({ userId: user._id });
      res.json({ accessToken });
    });
  } catch (error) {
    res.status(500).json({ error: `Error: ${error}` });
  }
});

module.exports = router;
