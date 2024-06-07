require('dotenv').config();
const express = require('express');
const path = require('path');
const sequelize = require('./config/database');
const Post = require('./models/post'); // Import the Post model

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

// Set the view engine to ejs
app.set('view engine', 'ejs');

// Set the views directory
app.set('views', path.join(__dirname, 'views'));

// Sync database
sequelize.sync({ force: true })
  .then(() => {
    console.log('Database synced');
  })
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

// GET route to fetch all posts
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

  // Basic validation
  if (!username || !thoughts) {
    return res.status(400).json({
      status: "error",
      message: "Username and thoughts are required"
    });
  }

  try {
    // Create the post
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

// DELETE route to remove a post by ID
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

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});



// require('dotenv').config();
// const express = require('express');
// const path = require('path');
// const sequelize = require('./config/database'); // Assuming you have a configured Sequelize instance

// const app = express();

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// app.use(express.static(path.join(__dirname, 'public')));

// // Set the view engine to ejs
// app.set('view engine', 'ejs');

// // Set the views directory
// app.set('views', path.join(__dirname, 'views'));

// // Define the Post class
// class Post {
//   constructor(username, thoughts) {
//     this.username = username;
//     this.thoughts = thoughts;
//   }
// }

// // In-memory storage for posts (for development only)
// const posts = [];

// const addPost = (username, thoughts) => {
//   posts.push(new Post(username, thoughts));
// };

// app.get('/', (req, res) => {
//   res.status(200).json({
//     status: "success",
//     message: "Welcome to the Social Network API"
//   });
// });

// // New GET route to fetch all posts
// app.get('/api/posts', (req, res) => {
//   res.status(200).json({
//     status: "success",
//     data: posts
//   });
// });

// app.post('/api/posts', (req, res) => {
//   const { username, thoughts } = req.body;

//   // Basic validation
//   if (!username || !thoughts) {
//     return res.status(400).json({
//       status: "error",
//       message: "Username and thoughts are required"
//     });
//   }

//   // Add the post
//   addPost(username, thoughts);
//   console.log(username, thoughts);

//   res.status(200).json({
//     status: "success",
//     message: "Post added successfully"
//   });
// });

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port http://localhost:${PORT}`);
// });


// require('dotenv').config();
// const express = require('express');
// const path = require('path');
// const { v4: uuidv4 } = require('uuid'); // Import uuid library for unique IDs
// const sequelize = require('./config/database'); // Assuming you have a configured Sequelize instance

// const app = express();

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// app.use(express.static(path.join(__dirname, 'public')));

// // Set the view engine to ejs
// app.set('view engine', 'ejs');

// // Set the views directory
// app.set('views', path.join(__dirname, 'views'));

// // Define the Post class
// class Post {
//   constructor(username, thoughts) {
//     this.id = uuidv4(); // Assign a unique ID to each post
//     this.username = username;
//     this.thoughts = thoughts;
//   }
// }

// // In-memory storage for posts (for development only)
// const posts = [];

// const addPost = (username, thoughts) => {
//   posts.push(new Post(username, thoughts));
// };

// const deletePost = (id) => {
//   const index = posts.findIndex(post => post.id === id);
//   if (index !== -1) {
//     posts.splice(index, 1);
//     return true;
//   }
//   return false;
// };

// app.get('/', (req, res) => {
//   res.status(200).json({
//     status: "success",
//     message: "Welcome to the Social Network API"
//   });
// });

// // GET route to fetch all posts
// app.get('/api/posts', (req, res) => {
//   res.status(200).json({
//     status: "success",
//     data: posts
//   });
// });

// app.post('/api/posts', (req, res) => {
//   const { username, thoughts } = req.body;

//   // Basic validation
//   if (!username || !thoughts) {
//     return res.status(400).json({
//       status: "error",
//       message: "Username and thoughts are required"
//     });
//   }

//   // Add the post
//   addPost(username, thoughts);
//   console.log(username, thoughts);

//   res.status(200).json({
//     status: "success",
//     message: "Post added successfully"
//   });
// });

// // DELETE route to remove a post by ID
// app.delete('/api/posts/:id', (req, res) => {
//   const { id } = req.params;
  
//   if (deletePost(id)) {
//     return res.status(200).json({
//       status: "success",
//       message: "Post deleted successfully"
//     });
//   } else {
//     return res.status(404).json({
//       status: "error",
//       message: "Post not found"
//     });
//   }
// });

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port http://localhost:${PORT}`);
// });