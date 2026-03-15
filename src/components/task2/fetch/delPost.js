const delPost = (url, postsGet, setPosts) => {
    fetch(url, {
      method: 'DELETE'
    }).then(response => {
      setTimeout(() => {
        // setPosts(data);
        postsGet(setPosts);
        // console.log("Waited 3 seconds!");
    }, 500);
      // return response.json();
    })
    // .then(data => console.log(data));
};

export default delPost;

