import { v4 as uuidv4 } from 'uuid';// import funcMoment from '../../funcMoment';
import moment from 'moment';

import { useNavigate } from 'react-router-dom';

export default function Posts(props) {
  // console.log(props);
  const setCurrentPostId = props.setCurrentPostId;
  const currentPostId = props.currentPostId;
  // console.log(setCurrentPostId);

  const posts = props.posts;   // moment().format('YYYY-MM-DD');// 

  const currentTime = moment().format('DD.MM.YYYY, h:mm:ss');  // console.log(currentTime);
  const secondTime = moment().format('DD.MM.YYYY, h:mm:ss');

  const navigate = useNavigate();

  const clickPost = (e) => {    // console.log('клик по div-Пост');
    const postId = e.target.closest('.post').children[0].textContent;
    
    setCurrentPostId(postId);    // console.log(currentPost);

    navigate(`/posts/${postId}`, { replace: true }); // /posts/{postId}
  }

  return (
    <div className='posts'>
      {posts.map(objPost => {
        return (
          <div key={uuidv4()} className='post' onClick={clickPost}>
            <div className='displayNone id'>{objPost.id}</div>
            <div className='name-created'>
              <p>Иван Иваныч Иванов - </p>
              <p>{moment(objPost.created).format('DD.MM.YYYY, h:mm:ss')}</p>
            </div>
            <div className='content'>{objPost.content}</div>
          </div>
        );
      })}
    </div>
  )
}

// <span className='closebtn' onClick={closeBtnPost}>×</span>