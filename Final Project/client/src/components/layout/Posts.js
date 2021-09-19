import postservice from '../../server/postservice';
import { useState, useEffect } from 'react';
import { Row } from 'react-bootstrap';

import Post from './Post';


const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    postservice.get()
      .then(response => setPosts(response.data));
  }, []);

  return (
    <div className="display:flex">
      <Row>
        {posts.map((post, index) => {
          return <Post key={post.id} post={post} index={index} />
        })}
      </Row>
    </div>
  )
}

export default Posts
