import { v4 as uuidv4 } from 'uuid';
// import funcMoment from '../../funcMoment';
import moment from 'moment';

export default function Posts(props) {
  const posts = props.posts;   // moment().format('YYYY-MM-DD');// console.log(posts);

  const currentTime = moment().format('DD.MM.YYYY, h:mm:ss')
  // console.log(currentTime);
  // console.log(moment(1773368210679).format('DD.MM.YYYY, h:mm:ss'));
  const secondTime = moment().format('DD.MM.YYYY, h:mm:ss')
  // console.log(secondTime);
  // let diffInMinutes = secondTime.Diff(currentTime, 'minutes');
  // console.log(diffInMinutes);

  const closeBtnPost = (e) => {
    console.log('Кнопка закрыть Пост');
    console.log(e.target);
  }

  return (
    <div className='posts'>
      {posts.map(objPost => {
        return (
          <div key={uuidv4()} className='post'>
            <div className='displayNone'>{objPost.id}</div>
            <div className='name-created'>{moment(objPost.created).format('DD.MM.YYYY, h:mm:ss')}</div>
            <div className='content'>{objPost.content}</div>
          </div>
        );
      })}
    </div>
  )
}

// <span className='closebtn' onClick={closeBtnPost}>×</span>