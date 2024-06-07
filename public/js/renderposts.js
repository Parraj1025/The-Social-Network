
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



async function loadPosts() {
    let URL = 'https://the-social-network.onrender.com/api/posts';
    let posting = await fetch(URL);
    const current =posting.json()
    console.log(current)
}

// submitBtn.addEventListener('click', () => {
//     event.preventDefault()
//     let user = renderPosts(username.value)
//     console.log(user)
// }

// )


// module.exports = renderPosts();

