const postsArr = [];
let postsContainer = document.querySelector('#sales-point-container')
let htmlPosts = '';


llamarAPI('https://jsonplaceholder.typicode.com/posts');

function llamarAPI(endPoint) {
	postsContainer.innerHTML = 'Loading ...'
  fetch(endPoint)
    .then(response => response.json())
    .then((posts) => {
      console.log(posts)
      postsArr.push(...posts);
      return postsArr;
     })
    .then(postsArr => {
      postsContainer.innerHTML = printPosts(postsArr);
    })
    .catch((error) => {
      console.log(error);
    });
}

const getRandomInt= () =>{
  let min = 4;
  let max = 20;
  min = Math.ceil(min);
  max = Math.floor(max);
  randomNumber = Math.floor(Math.random() * (max - min) + min);
  console.log(randomNumber)
  return randomNumber;
}


const printPosts = (posts) => {
    return posts.slice (0, getRandomInt())
      .map((post, index) =>{
        return `<div class="sales-point card">
              <div class="imageWrapper">
                <img class= "card-img-top" src="https://picsum.photos/320/320?random=${index}" alt="">
              </div>
              <div class="card-body">
                <h2 class="card-title">${post.title}</h2>
                <p class="card-text">${post.body}</p>
                <button type="button" class="btn btn-info">Read More</button> 
              </div>
              </div>`;
    }).join('')
}


