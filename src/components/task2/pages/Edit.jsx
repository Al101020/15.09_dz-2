import { useEffect, useState } from 'react';

export default function Edit(props) {
  const postsArr = props.postsArr;
  const currentPostId = props.currentPostId;   
  const [inputEdit, setInputEdit] = useState(postsArr.find(obj => obj.id == currentPostId).content); // = posts.find(postObj => postObj.id == currentPostId);
  

  console.log(props);
  console.log('функция Edit');

  const onChange = ({ target }) => {
    console.log(target.value);
  };

  const btnSavePost = () => {
    console.log('btnSavePost');
  }

  return <>
    <div className='pageEdit'>
      <input 
        type='text' 
        // id='inputEdit' 
        id='inputEdit'
        name='inputEdit'
        value={inputEdit}
        onChange={onChange}
        
        required
      />
      <div type="button"
          id='btnSavePost' 
          onClick={btnSavePost}
        >Сохранить</div>
    </div>
  </>;
}
  