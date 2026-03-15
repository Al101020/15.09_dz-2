import { useNavigate } from 'react-router-dom';
import moment from 'moment';
import delPost from '../../fetch/delPost';
import putPost from '../../fetch/putPost';
import postsGet from '../../fetch/postsGet';

export default function Post(props) {  
  console.log(props);

  const navigate = useNavigate();
 
  const posts = props.postsArr;  // console.log(posts); // setPosts
  const currentPostId = props.currentPostId;  // console.log(currentPostId);
  const post = posts.find(postObj => postObj.id == currentPostId);
  const setPosts = props.setPosts
  console.log(post);

   if (post === undefined) {
    return;
  }

  // const navigate = useNavigate();
  // const clickPost = (e) => {    // console.log('клик по div-Пост');
  //   const postId = e.target.closest('.post').children[0].textContent;
  //   console.log('ID поста - ' + postId);

  //   navigate(`/posts/${postId}`, { replace: true }); // /posts/{postId}
  // } // {moment(objPost.created).format('DD.MM.YYYY, h:mm:ss')}
  
  const funcToChange = () => {
    console.log('кнопка toChange POST - изменить');
    console.log(currentPostId);
    const url = 'http://localhost:7070/posts/' + currentPostId;
    console.log(url);
    const body = {id: currentPostId, content: 0};
    console.log(body);

    navigate('/posts/edit', { replace: true });
  }

  const funcDelPost = () => {
    console.log('кнопка Delete POST');
    console.log(currentPostId);
    const url = 'http://localhost:7070/posts/' + currentPostId;
    console.log(url);
    delPost(url, postsGet, setPosts);    // postsGet(setPosts);

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
