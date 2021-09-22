import postservice from '../../service/postservice';
import { useState, useEffect } from 'react';
import { Row } from 'react-bootstrap';

import Post from './Post';


const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    postservice.findAll()
      .then(response => setPosts(response.data));
  }, []);

  return (
    <div className="">
      <Row>
        {posts.map((post, index) => {
          return <Post key={post._id} post={post} index={index} />
        })}
      </Row>
    </div>
  )
}

export default Posts
