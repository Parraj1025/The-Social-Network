
// const username = document.getElementById('post')
// const submitBtn = document.getElementById('submit')

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

// submitBtn.addEventListener('click', () => {
//     event.preventDefault()
//     let user = renderPosts(username.value)
//     console.log(user)
// }

// )


// module.exports = renderPosts();

