import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function Posts(props) {  // 
  const [posts, setPosts] = useState(props.posts);
  
  useEffect(() => {
    if (posts === '') {
      // console.log(posts);
      return;
    } 
    // else if (posts.length === 0) {
    //   return;
    // } 
    else {
      console.log(posts);
    }
  }, [props]);

  
  return (
    <div className='posts'>
      {/* {posts.map(item => {
        <div className='post'></div>
      })} */}
    </div>
  )
}