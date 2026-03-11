fetch('http://localhost:7070/posts', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: 'John',
    age: 30
  })
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Fetch error:', error));


// const fetchGetPosts = () => {
//   fetch('http://localhost:7070/posts')
//     .then(response => {
//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }
//         return response.json();
//     })
//     .then(data => {
//       // console.log(data);
//     })
//     .catch(error => {
//       console.error('!!! FetchPosts error:', error);
//     });
// }

// export default fetchGetPosts;


// Пример:
// fetch('https://api.example.com/data', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     name: 'John',
//     age: 30
//   })
// })
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.error('Fetch error:', error));