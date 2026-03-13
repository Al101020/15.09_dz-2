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
    if (posts === '') {
      postsGet(setPosts);
      return;
    } else if (posts.length === 0) {
      return;
    } else if (posts.length > 0) {
      setPostsArr(posts);
    }
  }, [posts]);

  return (
    <div className='task2'>
      <Routes>
        <Route path='/' element={<HomePage postsArr={postsArr}/>} />
        <Route path='/posts/new' element={<PageNewPost setPosts={setPosts} />} />
      </Routes>
    </div>
  )
};

export default Crud;