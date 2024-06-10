require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001
const CONNECT = process.env.CONNECT
const loadPosts= require('./public/js/renderposts');

const { Client } = require('pg');
 
const client = new Client({CONNECT});
 
client.connect() .then(() => { console.log('Connected to PostgreSQL database!'); }) .catch((err) => { console.error('Error connecting to the database:', err); });

//set environment variables 

//give application access to the public folder for static components of app

app.use(express.static('./public'));
app.use(express.json());


//created logic for a post and storage for the posts

 const posts = []

class post {
 constructor(username,thoughts){
 this.username = username,
 this.thoughts = thoughts
}

// //fucntion to create a new post with provided information
}


// //show what port it is listening on
app.listen(PORT, () => {
console.log(`running on port ${PORT}`)});

//get route for index files

app.get("/",(req,res) => { 
    // res.render('index');
    res.sendFile(__dirname + '/index.html')
    
} )

//get route for the posts API

app.get('/api/posts',(req,res) => {
    res.json(posts)
});

//create logic for deleting posts

app.delete('/',(req,res) => {
    
    console.log('delete request received')
})

//route to update posts database

app.post('/api/posts', (req,res) => {
 //grab input
 const username = req.body.username;
 const thoughts = req.body.thoughts
 let newpost = {
    user: username,
    thought: thoughts
 }
 posts.push(newpost)
  console.log(username,thoughts)
 //add user
 //output confirmation
 res.json({message: `${username},${thoughts}`})
})


