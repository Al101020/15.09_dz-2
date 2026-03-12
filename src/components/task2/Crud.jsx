import './Crud.css';
import { Routes, Route } from 'react-router';
import { useEffect, useState } from 'react';
import HomePage from './pages/HomePage';
import PageNewPost from './pages/PageNewPost';

import postsGet from './fetch/postsGet';

function Crud() {
  const [posts, setPosts] = useState('');

  useEffect(() => {
    postsGet(setPosts);
  }, []);

  useEffect(() => {
    if (posts === '') {
      return;
    }    // console.log('изменился posts');    // console.log(posts);
  }, [posts]);

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