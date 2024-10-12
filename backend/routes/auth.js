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
    const { username, password, email, role } = req.body;

    // Check if the username already exists in the database
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ error: "Username already exists" });
    }

    // Check if the email already used before
    const existingEmail = await User.findOne({ email });
    if (existingEmail) {
      return res.status(400).json({ error: "email already used before" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      username,
      email,
      role,
      password: hashedPassword,
    });

    const accessToken = generateAccessToken({ userId: user._id });
    const refreshToken = generateRefreshToken({ userId: user._id });
    await RefreshToken.create({
      userId: user._id,
      refreshToken,
    });

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true, // Prevents JavaScript access
      secure: process.env.NODE_ENV === "production", // Ensures cookies are sent over HTTPS in production
      sameSite: "Strict", // Helps mitigate CSRF attacks
    });
    res.status(201).json({
      accessToken,
    });
  } catch (err) {
    res.status(500).json({ error: "registeration failed" });
  }
});

// User login
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
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

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "Strict",
    });
    res.status(200).json({ accessToken });
  } catch (error) {
    res.status(500).json({ error: "Login failed" });
  }
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
