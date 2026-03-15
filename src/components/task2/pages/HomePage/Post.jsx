import { useNavigate } from 'react-router-dom';

export default function Post(props) {
  // console.log(props);

  // const navigate = useNavigate();
  // const clickPost = (e) => {    // console.log('клик по div-Пост');
  //   const postId = e.target.closest('.post').children[0].textContent;
  //   console.log('ID поста - ' + postId);

  //   navigate(`/posts/${postId}`, { replace: true }); // /posts/{postId}
  // }

  return (
    <div className='pagePost'></div>
  )
}

// <span className='closebtn' onClick={closeBtnPost}>×</span>