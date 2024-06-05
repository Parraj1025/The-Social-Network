require('dotenv').config();
const express = require('express');
const path = require('path');
const sequelize = require('./config/database');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

// Set the view engine to ejs
app.set('view engine', 'ejs');

// Set the views directory
app.set('views', path.join(__dirname, 'views'));

const posts = [];

class post {
  constructor(username,thoughts){
  this.username = username,
  this.thoughts = thoughts
 }};

const addPosts = (username,thoughts) => {
  posts.push(new post(username,thoughts))
}

app.get('/', (req, res) => {
  res.status(200).json({
    status: "success", 
    message: "Welcome to the Social Network API"
  })
});

app.post('/api/posts', (req,res) => {
  //grab input
  const {username,thoughts}  = req.body
  console.log(username,thoughts)
  //add user
  addPosts(username,thoughts)
  //output confirmation
//   res.json({message: 'user added'})
//  })
 res.status(200).json({
  status: "success",
  message: "Post Worked"
 })
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
