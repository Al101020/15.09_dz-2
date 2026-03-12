import BtnNewPost from './HomePage/BtnNewPost';
import Posts from './HomePage/Posts';

import { useEffect, useState } from 'react';

export default function HomePage(props) {
  useEffect(() => {
    const posts = props.posts;
    if (posts === '') {
      return;
    }    // console.log('изменился posts');
    console.log(posts);
  }, [props]);  // console.log(props);

  return <>
    <BtnNewPost />
    <Posts />
  </>;
}
    