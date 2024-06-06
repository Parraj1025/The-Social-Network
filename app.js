require('dotenv').config();
const express = require('express');
const path = require('path');
const sequelize = require('./config/database');

const app = express();
require('dotenv').config()
const PORT = process.env.PORT || 3001
const renderPost = require('./public/js/renderposts');
const { Sequelize } = require('sequelize')

// const sequelize = new Sequelize (
//     process.env.POSTGRESURL,
//     {
//         dialect: 'postgres',
//     }
// )

// sequelize.sync()
// .then(()=>{
//     console.log('youre in')
// })
// .catch((err)=>{console.log(err)}) 


// client.connect().then(()=>{console.log('hey im connected')}).catch(err => console.error(err))

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


const addPosts = (username,thoughts) => {
    posts.push(new post(username,thoughts))
}

// //show what port it is listening on
app.listen(PORT, () => {
console.log(`running on port ${PORT}`)});

//get route for index files

app.get("/",(req,res) => { 
    // res.render('index');
    res.send("./views/index.html")
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
  console.log(username,thoughts)
 //add user
 addPosts(username,thoughts)
 //output confirmation
 res.json({message: 'post added'})
})

