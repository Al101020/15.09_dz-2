import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { useNavigate } from 'react-router-dom';

import createPost from '../fetch/createPost';

import postsGet from '../fetch/postsGet';

export default function PageNewPost(props) {
  const [newPost, setNewPost] = useState('');

  const navigate = useNavigate();
  
  const onChange = ({ target }) => {
    setNewPost(target.value);    // console.log(target.value);
  };
  
  const toPublish = () => {  // e.preventDefault();  // console.log(newPost);
    if (newPost === '') {
      return;      // console.log('toPublish - ПУСТО');      // return;
    } else {      // console.log(newPost);      // let myuuid = uuidv4();      // const toPublishNewPost = {'id': myuuid, 'content': newPost};
      const toPublishNewPost = {'id': 0, 'content': newPost};// console.log(toPublishNewPost);
      createPost(toPublishNewPost);
      postsGet(props.setPosts);
    }
    setNewPost('');
    navigate('/', { replace: true });
  };

  const closebtn = () => {
    navigate('/', { replace: true });    // console.log('closebtn');
  }

  return <>
    <div className='PageNewPost'>
      <div className='newPost'>
        <div className='newPostTitle'>
          <a href='#'>Публикация</a>
          <a href='#'>Фото/Видео</a>
          <a href='#'>Прямой эфир</a>
          <a href='#'>Ещё...</a>
          <span className='closebtn' onClick={closebtn}>×</span>
        </div>
        <input 
          type='text' 
          id='newPostInput' 
          name='newPostInput'
          value={newPost}
          onChange={onChange}
          placeholder="Пишим что хотим, в разумных пределах"
          required
        />
        <button type="submit" id='newPostBtn' onClick={toPublish}>Опубликовать</button>
      </div>
    </div>
  </>;
}
