import BtnNewPost from './HomePage/BtnNewPost';
import Posts from './HomePage/Posts';

import { useEffect, useState } from 'react';

export default function HomePage(props) {
  // console.log(props);

  const postsArr = props.postsArr;  // 
  // const currentPostId = props.currentPostId;
  // // console.log(currentPostId);
  const setCurrentPostId = props.setCurrentPostId;
  // console.log(setCurrentPostId);

  if (postsArr === '') {
    return;
  } else if (postsArr === undefined ) {
    return;
  } 
  // else if (postsArr.length === 0) {
  //   return;
  // } else if (postsArr.length > 0) {
  //   //
  // }

  return <>
    <BtnNewPost />
    <Posts 
      posts={postsArr}
      // currentPostId={props.currentPostId}
      setCurrentPostId={props.setCurrentPostId}
    />
  </>;
}
    