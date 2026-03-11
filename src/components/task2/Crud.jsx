import './Crud.css';
import { Routes, Route } from 'react-router';
import { useEffect, useState } from 'react';
import HomePage from './pages/HomePage';
import PageNewPost from './pages/PageNewPost';

// import { useNavigate } from 'react-router-dom';
// import fetchPosts from './fetchPosts';

function Crud() {
  const [posts, setPosts] = useState('');

  useEffect(() => {
    console.log('один раз в начале');
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
  }, []);
  

  useEffect(() => {
    if (posts === '') {
      return;
    }
    console.log('изменился posts');
    console.log(posts);
  }, [posts]);

  return (
    <div className='task2'>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/posts/new' element={<PageNewPost />} />
      </Routes>
    </div>
  )
};

export default Crud;