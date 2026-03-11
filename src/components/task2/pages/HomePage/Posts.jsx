import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function Posts(props) {  // console.log(props);
  const [posts, setPosts] = useState([]);

  return (
    <div className='posts'></div>
  )
}