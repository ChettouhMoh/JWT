require("dotenv").config();
const express = require("express");
const cors = require("cors");

var corsOptions = {
  origin: "http://localhost:3000",
};

const app = express();
const authRoutes = require("./routes/auth");
const protectedRoute = require("./routes/protectedRoute");

app.use(cors(corsOptions));
app.use(express.json());
app.use("/auth", authRoutes);
app.use("/protected", protectedRoute);

app.get("/", (req, res) => {
  res.json({ message: "Welcome to guest section " });
});
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
