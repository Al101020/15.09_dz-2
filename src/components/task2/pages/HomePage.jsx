import BtnNewPost from './HomePage/BtnNewPost';
import Posts from './HomePage/Posts';

import { useEffect, useState } from 'react';

export default function HomePage(props) {
    // console.log(props);

  return <>
    <BtnNewPost />
    <Posts posts={props.posts} />
  </>;
}
    