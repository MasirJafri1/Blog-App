const express = require("express");
const User = require("../models/User.model.js");

const router = express.Router();

// Render signin page
router.get("/signin", (req, res) => {
  res.render("signin");
});

// Render signup page
router.get("/signup", (req, res) => {
  res.render("signup");
});

// Signin route - Handle user login
router.post("/signin", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.render("signin", {
        error: "Email and password are required.",
      });
    }

    // Match password and generate token
    const token = await User.matchPasswordAndGenerateToken(email, password);

    // Set the token as a cookie
    return res.cookie("token", token).redirect("/");
  } catch (error) {
    // console.error("Signin error:", error);
    return res.render("signin", {
      error: "Incorrect Email or Password",
    });
  }
});

// Logout route -
router.get("/logout", (req, res) => {
  res.clearCookie("token").redirect("/");
});

// Signup route
router.post("/signup", async (req, res) => {
  try {
    const { fullName, email, password } = req.body;

    if (!fullName || !email || !password) {
      return res.render("signup", {
        error: "Full name, email, and password are required.",
      });
    }

    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.render("signup", {
        error: "Email is already registered.",
      });
    }

    // Create new user
    await User.create({
      fullName,
      email,
      password,
    });

    return res.redirect("/user/signin");
  } catch (error) {
    // console.error("Signup error:", error);
    return res.render("signup", {
      error: "Error creating account. Please try again later.",
    });
  }
});

module.exports = router;
