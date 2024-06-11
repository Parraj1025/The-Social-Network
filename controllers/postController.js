// controllers/postController.js
const { Post } = require("../models");
const { User } = require('../models')
const { formatDateTo12Hour } = require("../utils");

exports.createPost = async (req, res) => {
  const { userId, thoughts } = req.body; // Assuming userId is provided in the request body

  if (!userId || !thoughts) {
    return res.status(400).json({
      status: "error",
      message: "userId and thoughts are required",
    });
  }

  try {
    const post = await Post.create({ userId, thoughts }); // Assign userId to the userId field
    res.status(201).json({
      status: "success",
      message: "Post added successfully",
      data: {
        id: post.id,
        thoughts: post.thoughts,
        createdAt: formatDateTo12Hour(post.createdAt),
        userId: post.userId // Include userId in the response
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};


// Get all posts with associated user information
exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ["username"], // Include only the username from the user table
        },
      ],
    });

    const formattedPosts = posts.map(post => ({
      id: post.id,
      thoughts: post.thoughts,
      createdAt: formatDateTo12Hour(post.createdAt),
      updatedAt: formatDateTo12Hour(post.updatedAt),
      username: post.User ? post.User.username : null // Check if User is not null before accessing username
    }));

    res.status(200).json({ status: "success", data: formattedPosts });
  } catch (error) {
    console.error("Error fetching posts:", error);
    res.status(500).json({ status: "error", message: "Internal server error" });
  }
};

exports.deletePost = async (req, res) => {
  const { id } = req.params;

  try {
    const post = await Post.findByPk(id);
    if (post) {
      await post.destroy();
      res.status(200).json({
        status: "success",
        message: "Post deleted successfully",
      });
    } else {
      res.status(404).json({
        status: "error",
        message: "Post not found",
      });
    }
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};