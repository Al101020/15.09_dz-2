import './Crud.css';
import { Routes, Route } from 'react-router';
import { useEffect, useState } from 'react';
import HomePage from './pages/HomePage';
import PageNewPost from './pages/PageNewPost';

import postsGet from './fetch/postsGet';

function Crud() {
  const [posts, setPosts] = useState('');
  const [postsArr, setPostsArr] = useState([]);

  useEffect(() => {
    postsGet(setPosts);
    // console.log(posts);
  }, []);

  // useEffect(() => {
  //       // console.log('изменился posts');    // console.log(posts);
  // }, [posts]);

  useEffect(() => {
    // console.log(posts.length);
    if (posts === '') {
      return;
    } else if (posts === posts.length) {
      return;
    }
    console.log(posts);
  }, [postsArr]);

  return (
    <div className='task2'>
      <Routes>
        <Route path='/' element={<HomePage posts={posts}/>} />
        <Route path='/posts/new' element={<PageNewPost setPosts={setPosts} />} />
      </Routes>
    </div>
  )
};

export default Crud;