
// const username = document.getElementById('post')
// const submitBtn = document.getElementById('submit')




async function loadPosts() {
    let URL = 'https://the-social-network.onrender.com/api/posts';
    let posting = await fetch(URL);
    const current =posting.json()
    const it = Object.getPrototypeOf(current)
    return it
}

// submitBtn.addEventListener('click', () => {
//     event.preventDefault()
//     let user = renderPosts(username.value)
//     console.log(user)
// }

// )


 module.exports = loadPosts();

