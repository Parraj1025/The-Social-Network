
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
    let posting = fetch(URL);
    const current = await posting.json();
    const finalpost = current.result;
    // console.log(current)
    return finalpost
}

// submitBtn.addEventListener('click', () => {
//     event.preventDefault()
//     let user = renderPosts(username.value)
//     console.log(user)
// }

// )


 module.exports = loadPosts();

