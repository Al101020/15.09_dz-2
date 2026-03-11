import './Crud.css';
import NewPost from './NewPost';
import Posts from './Posts';
import { useEffect, useState } from 'react';


function Crud() {
  const [newPost, setNewPost] = useState('');
  return (
    <div className='task2'>
      <NewPost newPost={newPost} setNewPost={setNewPost} />
      <Posts />
    </div>
  )
};

export default Crud;