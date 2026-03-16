import { useNavigate } from 'react-router-dom';

export default function BtnNewPost() {
  const navigate = useNavigate();

  const funcClickBtnNewPost = (e) => {
    e.preventDefault();
    navigate('/posts/new', { replace: true });
  }
  return (
    <div className='btnNewPost'>
      <button id='btnNewPost' onClick={funcClickBtnNewPost}>Создать пост</button>
    </div>
  )
}
