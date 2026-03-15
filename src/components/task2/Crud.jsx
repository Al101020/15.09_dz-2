import './Crud.css';
import { Routes, Route } from 'react-router';
import { useEffect, useState } from 'react';
import HomePage from './pages/HomePage';
import PageNewPost from './pages/PageNewPost';

import postsGet from './fetch/postsGet';
import Post from './pages/HomePage/Post';

function Crud() {
  const [posts, setPosts] = useState('');
  const [postsArr, setPostsArr] = useState([]);
  const [currentPostId, setCurrentPostId] = useState('');

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

  useEffect(() => {
    if (posts === '') {
      return;
    }
    console.log(currentPostId);
  }, [currentPostId]);

  return (
    <div className='task2'>
      <Routes>
        <Route path='/' element={<HomePage 
            postsArr={postsArr}
            currentPostId={currentPostId}
            setCurrentPostId={setCurrentPostId}
          />}
        />
        <Route path='/posts/new' element={<PageNewPost setPosts={setPosts} />} />
        <Route path='/posts/:id' element={<Post />} />
      </Routes>
    </div>
  )
};

export default Crud;