import './Crud.css';
import NewPost from './NewPost';
import Posts from './Posts';
import { useEffect, useState } from 'react';


function Crud() {
  const [newPost, setNewPost] = useState('');
  const [clickBtnNewPost, setClickBtnNewPost] = useState('');

  useEffect(() => {    
    // console.log(clickBtnNewPost);
    if (clickBtnNewPost !== '') {
      fetch('http://localhost:7070/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          post: clickBtnNewPost
        })
      })
        // .then(response => console.log(response)) //.then(response => response.json())
        // .then(data => console.log(data))
        .catch(error => console.error('Fetch error:', error));
    }

  }, [clickBtnNewPost]);

  return (
    <div className='task2'>
      <NewPost 
        newPost={newPost} 
        setNewPost={setNewPost}
        clickBtnNewPost={clickBtnNewPost}
        setClickBtnNewPost={setClickBtnNewPost} />
      <Posts clickBtnNewPost={clickBtnNewPost} />      {/* <Posts /> */}
    </div>
  )
};

export default Crud;