// import React from 'react';
// import { useNavigate } from 'react-router-dom';



export default function NewPost() {
  // const navigate = useNavigate();

  const funcClickBtnNewPost = (e) => {
    e.preventDefault();
    console.log('Кнопка - Создать пост');
    // navigate('/dashboard');
  }
  return (
    <div className='newPost'>
      <button id='btnNewPost' onClick={funcClickBtnNewPost}>Создать пост</button>
    </div>
  )
}