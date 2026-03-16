import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';

import { useNavigate } from 'react-router-dom';

export default function Posts(props) {
  const setCurrentPostId = props.setCurrentPostId;

  const posts = props.posts;

  const navigate = useNavigate();

  const clickPost = (e) => {
    const postId = e.target.closest('.post').children[0].textContent;
    setCurrentPostId(postId);
    navigate(`/posts/${postId}`, { replace: true });
  }

  return (
    <div className='posts'>
      {posts.map(objPost => {
        return (
          <div key={uuidv4()} className='post' onClick={clickPost}>
            <div className='displayNone id'>{objPost.id}</div>
            <div className='name-created'>
              <p className='name'>Иван Иваныч Иванов</p>
              <p className='post-date-time'>{moment(objPost.created).format('DD.MM.YYYY, h:mm:ss')}</p>
            </div>
            <div className='content'>{objPost.content}</div>
          </div>
        );
      })}
    </div>
  )
}
