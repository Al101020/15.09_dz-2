import BtnNewPost from './HomePage/BtnNewPost';
import Posts from './HomePage/Posts';

export default function HomePage(props) {

  const postsArr = props.postsArr;

  if (postsArr === '') {
    return;
  } else if (postsArr === undefined ) {
    return;
  } 

  return <>
    <BtnNewPost />
    <Posts 
      posts={postsArr}
      setCurrentPostId={props.setCurrentPostId}
    />
  </>;
}
    