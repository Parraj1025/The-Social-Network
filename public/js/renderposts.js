
// const username = document.getElementById('post')
// const submitBtn = document.getElementById('submit')
const post= []

async function loadPosts() {
    let URL = 'https://the-social-network.onrender.com/api/posts';
    let posting = await fetch(URL);
    const current = await posting.json()
    posting = current.results
    post.push(current)
    return posting
}

// submitBtn.addEventListener('click', () => {
//     event.preventDefault()
//     let user = renderPosts(username.value)
//     console.log(user)
// }

// )


 module.exports = loadPosts();

