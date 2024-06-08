require('dotenv').config();
const express = require('express');
const path = require('path');
const sequelize = require('./config/database');
const User = require('./models/User'); //Import User model
const Post = require('./models/post'); // Import the Post model
const bcrypt = require('bcrypt');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Set the view engine to ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Sync database
sequelize.sync({ force: true })
  .then(() => console.log('Database synced'))
  .catch(err => console.log('Error syncing database:', err));

function formatTime(date) {
  let hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  const minutesStr = minutes < 10 ? '0' + minutes : minutes;
  return `${hours}:${minutesStr} ${ampm}`;
}

app.get('/', (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Welcome to the Social Network API"
  });
});

app.get('/api/posts', async (req, res) => {
  try {
    const posts = await Post.findAll();
    const formattedPosts = posts.map(post => ({
      id: post.id,
      username: post.username,
      thoughts: post.thoughts,
      createdAt: formatTime(post.createdAt)
    }));
    res.status(200).json({
      status: "success",
      data: formattedPosts
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message
    });
  }
});

app.post('/api/posts', async (req, res) => {
  const { username, thoughts } = req.body;

  if (!username || !thoughts) {
    return res.status(400).json({
      status: "error",
      message: "Username and thoughts are required"
    });
  }

  try {
    const user = await User.findOne({ where: { username } });
    if (!user) {
      return res.status(404).json({
        status: "error",
        message: "User not found"
      });
    }

    const post = await Post.create({ username, thoughts });
    const formattedPost = {
      id: post.id,
      username: post.username,
      thoughts: post.thoughts,
      createdAt: formatTime(post.createdAt)
    };
    res.status(201).json({
      status: "success",
      message: "Post added successfully",
      data: formattedPost
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message
    });
  }
});

app.delete('/api/posts/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const post = await Post.findByPk(id);
    if (post) {
      await post.destroy();
      res.status(200).json({
        status: "success",
        message: "Post deleted successfully"
      });
    } else {
      res.status(404).json({
        status: "error",
        message: "Post not found"
      });
    }
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message
    });
  }
});

//Register new user
app.post('/api/users/register', async (req, res) => {
  const { username, password } = req.body;

  if(!username || !password) {
    return res.status(400).json({
      status: "error",
      message: "Username and password are required"
    });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ username, password: hashedPassword });
    res.status(201).json({
      status: "success",
      message: "User registered successfully",
      data: { id: user.id, username: user.username }
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message
    });
  }
});

// Authenticate a user 


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
