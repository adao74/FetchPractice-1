let arrayOfPosts = [];

const yourPost = {
    title: 'foo',
    body: 'bar',
    userId: 1
  }

// This function waits for the web page to be loaded, when it does it will run the code inside of it which happens to be getPosts()
window.onload = function() {
  getPosts()

}

const catchError = (res) => {
    
    console.log(res)

    // For errors returned from the ENDPOINT (e.g. fetch todo that doesn't exist) (i.e. doesn't work if the error is due to endpoint typo!!!)
    if(!res.ok) {
        console.log("There's an error")
        throw Error(res.statusText)  // res.statusText is passed into catch as the argument 
    } 
    
    
    return res.json()
}


const getPosts = () => {
    fetch('http://jsonplaceholder.typicode.com/posts')
    .then( (response) => catchError(response))
    .then(posts => arrayOfPosts = posts)
    .catch(err => console.log(`Error,  ${err}`)) // for all errors
  }


const getComments = () => {

    fetch('http://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(posts => arrayOfPosts = posts)

}

const getUsers = () => {

    fetch('http://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(posts => arrayOfPosts = posts)
}


// const addPosts = () => {

//     const options = {
//       method: 'POST',
//       body: JSON.stringify(yourPost),
//       headers: new Headers({ 'Content-Type': 'application/json' })
//       // headers: {
//       //   "Content-type": "application/json; charset=UTF-8"
//       // }
//     }
  
//     //only the post you made is returned
//     fetch('http://jsonplaceholder.typicode.com/posts', options)
//       .then(res => res.json())
//       .then(post => arrayOfPosts = post)
//       .catch(error => console.error(`Error: ${error}`))

//       console.log(arrayOfPosts)
//   }

//   const updatePosts = () => {

//     const options = {
//       method: 'PUT',
//       body: JSON.stringify(yourPost),
//       headers: new Headers({ 'Content-Type': 'application/json' })
//     }
//     fetch('http://jsonplaceholder.typicode.com/posts/1', options)
//       .then(res => res.json())
//       .then(post => console.log(post))
//       .catch(error => console.error(`Error: ${error}`))
//   }


// This function logs the results in your browser's console
const consolePosts = () => {
  console.log(arrayOfPosts)
}

// this function creates elements inside the all-posts ul, then appends text inside it with the posts that were returned in the request.
const displayPost = () => {
  const allPosts = document.getElementById('all-posts')
  arrayOfPosts.map((post, index) => {
    const li = document.createElement('li')
    const text = document.createTextNode(`#${index}, Title: ${post.title}:  ${post.body}, by user: ${post.userId}`)
    li.appendChild(text)
    allPosts.append(li)
  })
}

