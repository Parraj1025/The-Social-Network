
// const username = document.getElementById('post')
// const submitBtn = document.getElementById('submit')

const { json } = require("sequelize")


const array = []

class post {
    constructor(username) {
        this.username = username
    }
}

function createPost (username) {
    const userPost = new post(username)
    return userPost
}




function renderPosts (username) {
   const newPost = createPost(username)
   console.log(newPost)
};



async function loadPosts() {
    let URL = 'https://the-social-network.onrender.com/api/posts';
    let posting = await fetch(URL);
    const current = JSON.parse(posting)
    array.push(current)
    // console.log(current)
    return current
}

// submitBtn.addEventListener('click', () => {
//     event.preventDefault()
//     let user = renderPosts(username.value)
//     console.log(user)
// }

// )


 module.exports = loadPosts();

