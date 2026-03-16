const delPost = (url, postsGet, setPosts) => {
  fetch(url, {
    method: 'DELETE'
  }).then(response => {
    if (!response.ok) {
      console.log(response);
      throw new Error(`Ошибка HTTP: ${response.status}`);
    } else {
      setTimeout(() => {
        postsGet(setPosts);
      }, 700);
    }
  })
};

export default delPost;
