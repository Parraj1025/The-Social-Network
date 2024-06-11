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

// ============MARCIOS IMPLEMENTATION=============
// const { Post } = require('../models');

// // Create a new post
// exports.createPost = async (req, res) => {
//     try {
//         const { username, thoughts } = req.body;
//         if (!username || !thoughts) {
//             return res.status(400).json({ status: "error", message: "Content and userId are required" });
//         }
//         const newPost = await Post.create({ content: thoughts, userId: username });
//         res.status(201).json({ status: 'success', message: 'Post created successfully', data: newPost });
//     } catch (error) {
//         console.error('Error creating post:', error);
//         res.status(500).json({ status: 'error', message: 'Internal server error' });
//     }
// };

// // Get all posts
// exports.getAllPosts = async (req, res) => {
//     try {
//         const posts = await Post.findAll();
//         res.status(200).json({ status: 'success', data: posts });
//     } catch (error) {
//         console.error('Error fetching posts:', error);
//         res.status(500).json({ status: 'error', message: 'Internal server error' });
//     }
// };

// // Get a single post by ID
// exports.getPostById = async (req, res) => {
//     try {
//         const { id } = req.params;
//         const post = await Post.findByPk(id);
//         if (post) {
//             res.status(200).json(post, {
//                 status: 'success',
//                 message: 'Post retrieved successfully',
//             });
//         } else {
//             res.status(404).json({
//                 status: 'error',
//                 message: 'Post not found'
//             });
//         }
//     } catch (error) {
//         res.status(500).json({
//             status: 'error',
//             message: 'Internal server error'
//         });
//     }
// };

// // Update a post by ID
// exports.updatePost = async (req, res) => {
//     try {
//         const { id } = req.params;
//         const { content } = req.body;
//         const post = await Post.findByPk(id);
//         if (post) {
//             post.content = content;
//             await post.save();
//             res.status(200).json(post);
//         } else {
//             res.status(404).json({
//                 status: 'error',
//                 message: 'Post not found or content is empty'
//             });
//         }
//     } catch (error) {
//         res.status(500).json({
//             status: 'error',
//             message: 'Internal server error'
//         });
//     }
// };

// // Delete a post by ID
// exports.deletePost = async (req, res) => {
//     try {
//         const { id } = req.params;
//         const post = await Post.findByPk(id);
//         if (!post) {
//             return res.status(404).json({ status: 'error', message: 'Post not found' });
//         }
//         await post.destroy();
//         res.status(204).json({ status: 'success', message: 'Post deleted successfully' });
//     } catch (error) {
//         console.error('Error deleting post:', error);
//         res.status(500).json({ status: 'error', message: 'Internal server error' });
//     }
// };

// module.exports = { createPost, getAllPosts, getPostById, updatePost, deletePost };
