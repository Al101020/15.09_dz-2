import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import createPost from '../fetch/createPost';
import postsGet from '../fetch/postsGet';

export default function PageNewPost(props) {
  const [newPost, setNewPost] = useState('');
  const navigate = useNavigate();
  
  const onChange = ({ target }) => {
    setNewPost(target.value);
  };
  
  const toPublish = () => {
    if (newPost === '') {
      return;
    } else {
      const toPublishNewPost = {'id': 0, 'content': newPost};
      createPost(toPublishNewPost);
      postsGet(props.setPosts);
    }
    setNewPost('');
    navigate('/', { replace: true });
  };

  const closebtn = () => {
    navigate('/', { replace: true });
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
