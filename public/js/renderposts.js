
// const username = document.getElementById('post')

const { json } = require("sequelize");

// const submitBtn = document.getElementById('submit')
const post= []

async function loadPosts() {
    let URL = 'https://the-social-network.onrender.com/api/posts';
    let posting = await fetch(URL);
    const current = JSON.parse(posting);
    console.log(current.result)
    return current
}

// submitBtn.addEventListener('click', () => {
//     event.preventDefault()
//     let user = renderPosts(username.value)
//     console.log(user)
// }

// )


 module.exports = loadPosts();

