// import { v4 as uuidv4 } from 'uuid';

export default function Post(props) {
    // console.log(props.item.post);
  return (
    <div className='post'>
      <div className='who'>Name</div>
      <div className='wroteWhat'>{props.item.post}</div>
    </div>
  );
}