import { useEffect, useState } from 'react';// import fetchGetPosts from './fetchGetPosts';
import { v4 as uuidv4 } from 'uuid';
import Post from './Post';

export default function Posts(props) {  // console.log(props);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (posts.length === 0) return;
    // console.log(posts);
  }, [posts]);

  useEffect(() => {    // console.log(props);
    fetch('http://localhost:7070/posts')
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
        return response.json();
    })
    .then(data => {
      setPosts(data);
    })
    .catch(error => {
      console.error('!!! FetchPosts error:', error);
    });
  }, [props.clickBtnNewPost]);

  return (
    <div className='posts'>
      {posts.map(item => 
        <Post key={uuidv4()}
        item={item} />
      )}
    </div>
  )
}