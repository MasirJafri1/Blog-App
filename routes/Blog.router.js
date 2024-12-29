const express = require("express");
const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("cloudinary").v2;
const Blog = require("../models/Blog.model");
const Comments = require("../models/Comments.model");
require("dotenv").config();

const router = express.Router();

// Cloudinary Configure
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Multer configuration
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "blog-uploads",
    format: async (req, file) => "jpg",
    public_id: (req, file) => `${Date.now()}-${file.originalname}`,
  },
});

const upload = multer({
  storage,
  limits: {
    fileSize: 10 * 1024 * 1024, // 10MB max size
  },
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith("image/")) {
      cb(null, true); // Accept the file
    } else {
      cb(new Error("Invalid file type. Only images are allowed."), false); // Reject the file
    }
  },
});

// Routes
router.get("/add-new", (req, res) => {
  return res.render("addBlog", {
    user: req.user,
  });
});

router.get("/:id", async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id).populate("createdBy");
    if (!blog) {
      return res.status(404).send("Blog not found.");
    }
    const comments = await Comments.find({ blogId: req.params.id }).populate(
      "createdBy"
    );
    return res.render("blog", {
      user: req.user,
      blog,
      comments,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

router.post("/comment/:blogId", async (req, res) => {
  try {
    await Comments.create({
      content: req.body.content,
      blogId: req.params.blogId,
      createdBy: req.user._id,
    });
    return res.redirect(`/blog/${req.params.blogId}`);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

// MiddleWare for validating the title and body.Only upload image if title and body there

function validateBlogInput(req, res, next) {
  const { title, body } = req.body;

  if (!title || !body) {
    return res.status(400).send("Title and body are required.");
  }
  next();
}

router.post(
  "/",
  validateBlogInput,
  upload.single("coverImage"),
  async (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).send("Cover image is required.");
      }
      const { title, body } = req.body;
      const coverImageUrl = req.file.path;

      const blog = await Blog.create({
        title,
        body,
        createdBy: req.user._id,
        coverImageUrl,
      });
      return res.redirect(`/blog/${blog._id}`);
    } catch (err) {
      if (err instanceof multer.MulterError) {
        res.status(400).send("File upload error: " + err.message);
      } else {
        console.error(err);
        res.status(500).send("Internal Server Error");
      }
    }
  }
);

router.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send("Something went wrong! Please try again later.");
});

module.exports = router;
