require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./models/User");

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;
const mongoUri = MONGO_URI || "mongodb://127.0.0.1:27017/ecommerce";

mongoose.set("strictQuery", false);

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend is running");
});

app.post("/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({ error: "Name, email and password are required" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ error: "User already exists" });
    }

    const newUser = new User({ name, email, password });
    await newUser.save();
    res.json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Signup error:", error);
    res.status(500).json({ error: "Error registering user" });
  }
});

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: "Email and password are required" });
    }

    const user = await User.findOne({ email });
    if (!user || user.password !== password) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    res.json({ message: "Login successful", user: { email: user.email } });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ error: "Error logging in" });
  }
});

async function connectDB() {
  try {
    await mongoose.connect(mongoUri, {
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
    });
    console.log("MongoDB connected to:", mongoUri);
  } catch (error) {
    console.error("MongoDB connection failed:", error);
    process.exit(1);
  }
}

mongoose.connection.on("disconnected", () => {
  console.warn("MongoDB disconnected");
});

mongoose.connection.on("error", (error) => {
  console.error("MongoDB error:", error);
});

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});