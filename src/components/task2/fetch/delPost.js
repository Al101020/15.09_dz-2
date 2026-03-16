const delPost = (url, postsGet, setPosts) => {
  fetch(url, {
    method: 'DELETE'
  }).then(response => {
    setTimeout(() => {
      postsGet(setPosts);
    }, 700);
  })
};

export default delPost;
