require("dotenv").config();

const express = require("express");
const cors = require("cors");
const session = require("express-session");

const passport = require("./config/passport");

const authRoutes = require("./routes/authRoutes");

const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);

app.use(express.json());

app.use(
  session({
    secret: "email-cleaner-secret",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use("/auth", authRoutes);

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Email Cleaner API Running",
  });
});

app.get("/api/health", (req, res) => {
  res.json({
    status: "online",
    version: "1.0.0",
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});