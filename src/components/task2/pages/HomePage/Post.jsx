import { useNavigate } from 'react-router-dom';
import moment from 'moment';
import delPost from '../../fetch/delPost';
import postsGet from '../../fetch/postsGet';

export default function Post(props) {

  const navigate = useNavigate();
 
  const posts = props.postsArr;
  const currentPostId = props.currentPostId;
  const post = posts.find(postObj => postObj.id == currentPostId);
  const setPosts = props.setPosts;

   if (post === undefined) {
    return;
  }

  const funcToChange = () => {
    navigate('/posts/edit', { replace: true });
  }

  const funcDelPost = () => {
    const url = 'http://localhost:7070/posts/' + currentPostId;
    delPost(url, postsGet, setPosts);
    navigate('/', { replace: true });
  }

  return (
    <div className='pagePost'>
      <div className='name-created'>
        <p className='post-date-time'>{moment(post.created).format('DD.MM.YYYY, h:mm:ss')}</p>
        <p className='post-name'>Иван Иваныч Иванов</p>
      </div>
      <div className='PostContent'>{post.content}</div>
      <div className='buttonsPost'>
        <div 
          type="button"
          id='toChange' 
          onClick={funcToChange}
        >Именить</div>
        <div type="button"
          id='delete' 
          onClick={funcDelPost}
        >Удалить</div>
      </div>
    </div>
  )
}
