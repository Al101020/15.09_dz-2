import BtnNewPost from './HomePage/BtnNewPost';
import Posts from './HomePage/Posts';

import { useEffect, useState } from 'react';

export default function HomePage(props) {  // console.log(props);

  const postsArr = props.postsArr;
  // console.log(postsArr);

  if (postsArr === '') {
    return;
  } else if (postsArr === undefined ) {
    return;
  } else if (postsArr.length === 0) {
    return;
  } else if (postsArr.length > 0) {
    //
  }

  return <>
    <BtnNewPost />
    <Posts posts={postsArr} />
  </>;
}
    