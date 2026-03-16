import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import putPost from '../fetch/putPost';
import postsGet from '../fetch/postsGet';

export default function Edit(props) {
  const postsArr = props.postsArr;
  const currentPostId = props.currentPostId;
  const setPosts = props.setPosts;
  const [inputEdit, setInputEdit] = useState(postsArr.find(obj => obj.id == currentPostId).content); // = posts.find(postObj => postObj.id == currentPostId);
  
  const navigate = useNavigate();

  const onChange = ({ target }) => {
    setInputEdit(target.value);
  };

  const FuncBtnSavePost = () => {
    const url = 'http://localhost:7070/posts/' + currentPostId;
    const body = {id: currentPostId, content: inputEdit};
    putPost(url, body, postsGet, setPosts);
    postsGet(setPosts);
    navigate('/', { replace: true });
  }

  const closebtn = () => {
    navigate('/', { replace: true });
  }

  return <>
    <div className='pageEdit'>
      <div className='title-and-btn'>
        <span className='title-page-edit'>Редактировать публикацию</span>
        <span className='close-btn-edit' onClick={closebtn}>×</span>
      </div>
      <input 
        type='text'
        id='inputEdit'
        name='inputEdit'
        value={inputEdit}
        onChange={onChange}
        
        required
      />
      <button type="button"
          id='btn-save-post' 
          onClick={FuncBtnSavePost}
        >Сохранить</button>
    </div>
  </>;
}
