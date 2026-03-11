// import { useEffect, useState } from 'react';

export default function NewPost(props) {  // console.log(props);
  const onChange = ({ target }) => {
    props.setNewPost(target.value);    // console.log(target.value);
  }
  
  const clickBtnNewPost = (e) => {
    e.preventDefault();
    console.log(props.newPost);
    props.setNewPost('');
  }

  return (
    <div className='newPost' onSubmit={clickBtnNewPost}>
      <form autoComplete='off'>
        <input 
          type='text' 
          id='inputNewPost' 
          name='inputNewPost'
          value={props.newPost}
          onChange={onChange}
          placeholder="Пишим что хотим"
          required
        />
        <button type="submit" id='btnNewPost'>Создать пост</button>
      </form>
    </div>
  )
}