const putPost = (url, body, postsGet, setPosts) => {
    fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    }).then(response => {      
      console.log(response);
      setTimeout(() => {
        postsGet(setPosts);
    }, 700);
    })
};

export default putPost;

