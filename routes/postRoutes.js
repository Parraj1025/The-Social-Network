const express = require('express');
const { createPost, getAllPosts, deletePost } = require('../controllers/postController');
const router = express.Router();
const { formatDateTo12Hour } = require('../utils');

router.post('/', createPost);
router.get('/', getAllPosts);
router.delete('/:id', deletePost);

module.exports = router;
