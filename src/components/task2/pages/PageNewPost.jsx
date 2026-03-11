import { useEffect, useState } from 'react';

export default function PageNewPost() {
  const [newPost, setNewPost] = useState('');
  
  const onChange = ({ target }) => {
    setNewPost(target.value);    // console.log(target.value);
  }
  
  const clickNewPost = (e) => {
    e.preventDefault();
    console.log(newPost);
    setNewPost('');
  }

    return <>
      <div className='PageNewPost'>
        <div className='newPost' onSubmit={clickNewPost}>//
          <div>Публикация   Фото/Видео   Прямой эфир   Ещё...</div>
          <input 
            type='text' 
            id='inputNewPost' 
            name='inputNewPost'
            value={newPost}
            onChange={onChange}
            placeholder="Пишим что хотим, в разумных пределах"
            required
          />
          <button type="submit" id='btnNewPost'>Опубликовать</button>
        </div>
      </div>
    </>;
  }
    