
// const username = document.getElementById('post')
// const submitBtn = document.getElementById('submit')
const post= []

async function loadPosts() {
    try {
        const URL = 'https://the-social-network.onrender.com/api/posts';
        const response = await fetch(URL);

        if (!response.ok) {
            throw new Error(`not connected ${response.status}`)
        }
        const data = await response.json();
        console.log(data);
        return data
    } catch(error) {
        console.log('trouble loading posts... try again')
        return null
    }
    
    // let posting = await fetch(URL);
    // const current = await posting.json()
    // console.log(current)
    // return 
}

 
// submitBtn.addEventListener('click', () => {
//     event.preventDefault()
//     let user = renderPosts(username.value)
//     console.log(user)
// }

// )


 module.exports = loadPosts();

