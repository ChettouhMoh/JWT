const express = require("express");
const router = express.Router();
const RefreshToken = require("../models/RefreshToken.model");

// delete refresh token when user logout
router.post("/logout", async (req, res) => {
  try {
    const refreshToken = req.cookies.refreshToken;
    await RefreshToken.deleteOne({ refreshToken });

    res.clearCookie("refreshToken");
    return res.status(201);
  } catch (error) {
    return res.json({ error: `Error: ${error}` });
  }
});

module.exports = router;
