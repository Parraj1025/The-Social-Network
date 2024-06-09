const { Post } = require('/models')

// Create a new post
const createPost = async (req, res) => {
    try {
    const { content, userId } = req.body
    const newPost = await Post.create({ content, userId })
    res.status(201).json(newPost, {
        status: 'success',
        message: 'Post created successfully',
    })
    } catch (error) {
    res.status(500).json({ 
        status: 'error', 
        message: 'Internal server error' });
    }
};

// Get all posts
const getAllPosts = async (req, res) => {
    try {
    const posts = await Post.findAll();
    res.status(200).json(posts, {
        status: 'success',
        message: 'Posts retrieved successfully',
    });
    } catch (error) {
    res.status(500).json({ 
        status: 'error', 
        message: 'Internal server error' });
    }
};

// Get a single post by ID
const getPostById = async (req, res) => {
    try {
    const { id } = req.params;
    const post = await Post.findByPk(id);
    if (post) {
        res.status(200).json(post, {
            status: 'success',
            message: 'Post retrieved successfully',
        });
    } else {
        res.status(404).json({ 
            status: 'error', 
            message: 'Post not found' });
    }
    } catch (error) {
    res.status(500).json({ 
        status: 'error', 
        message: 'Internal server error' });
    }
};

// Update a post by ID
const updatePost = async (req, res) => {
    try {
    const { id } = req.params;
    const { content } = req.body;
    const post = await Post.findByPk(id);
    if (post) {
        post.content = content;
        await post.save();
        res.status(200).json(post);
    } else {
        res.status(404).json({ 
            status: 'error', 
            message: 'Post not found or content is empty', });
    }
    } catch (error) {
    res.status(500).json({ 
        statusbar: 'error', 
        message: 'Internal server error', });
    }
};

// Delete a post by ID
const deletePost = async (req, res) => {
    try {
    const { id } = req.params;
    const post = await Post.findByPk(id);
    if (post) {
        await post.destroy();
        res.status(204).send().json({
            status: 'success',
            message: 'Post deleted successfully',
        });
    } else {
        res.status(404).json({ 
            status: 'error',
            message: 'Post not found' });
    }
    } catch (error) {
    res.status(500).json({ error: error.message });
    }
};

module.exports = {
createPost,
getAllPosts,
getPostById,
updatePost,
deletePost,
};
