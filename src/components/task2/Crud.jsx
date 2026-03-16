import './Crud.css';
import { Routes, Route } from 'react-router';
import { useEffect, useState } from 'react';
import HomePage from './pages/HomePage';
import PageNewPost from './pages/PageNewPost';
import Edit from './pages/Edit';

import postsGet from './fetch/postsGet';
import Post from './pages/HomePage/Post';

function Crud() {
  const [posts, setPosts] = useState('');
  const [postsArr, setPostsArr] = useState([]);
  const [currentPostId, setCurrentPostId] = useState('');
  const [currentPost, setCurrentPost] = useState('');
  const [delPost, setDelPost] = useState(0);

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
    
    if (currentPostId === undefined) {
      setCurrentPostId('');
    }
    // console.log(currentPostId);

    // const cityId = cities.find(city => city.name === searchTerm).id
    // console.log(postsArr.find(postObj => postObj.id === currentPostId));
    // setCurrentPost(postsArr.find(postObj => postObj.id === currentPostId));
    // console.log(postsArr);
  }, [currentPostId]);

  useEffect(() => {
    if (currentPostId === '') {
      return;
    } else if (currentPostId === undefined) {
      setCurrentPostId('');
    }
    const curentPost = postsArr.find(postObj => postObj.id === currentPostId);
    console.log(curentPost);
  }, [postsArr]);

  useEffect(() => {
    if (delPost == 0) {
      return;
    } else {
      postsGet(setPosts);
    }
  }, [delPost]);

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
        <Route path='/posts/:id' element={<Post 
          postsArr={postsArr}
          currentPostId={currentPostId}
          setPosts={setPosts}
        />} />
        <Route path='/posts/edit' element={<Edit 
          postsArr={postsArr}
          currentPostId={currentPostId}
          setPosts={setPosts}
        />} />
      </Routes>
    </div>
  )
};

export default Crud;