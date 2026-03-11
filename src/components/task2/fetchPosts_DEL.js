const fetchPosts = () => {
  fetch('http://localhost:7070/posts')
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
        return response.json();
    })
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.error('!!! FetchPosts error:', error);
    });
}

export default fetchPosts;