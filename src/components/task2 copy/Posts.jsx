import fetchPosts from './fetchPosts';

export default function Posts() {
  fetchPosts();

  return (
    <div className='posts'></div>
  )
}