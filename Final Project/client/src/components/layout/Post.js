import { Card, Row, Col, Button } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import { useHistory } from 'react-router-dom'
import { useState, useEffect } from 'react';
import postservice from '../../service/postservice';
// import { Selector } from 'react-redux';

const Post = (props) => {
  const { post, index } = props;
  console.log('post', post)

  let history = useHistory();
  // useEffect(() => {
  //   postservice.deletePost()
  //     .then(response => setPosts(response.data));
  // }, []);
  // console.log(posts)
  const deletePost = () => {

    postservice.deletePost(post._id)
    history.push('/post')
  };
  return (
    <>
      <Card
        className="m-3 witch shadow"
      >
        <Row>
          <Col>
            <Card.Body>
              <Card.Title>{post.title}</Card.Title>
              <Card.Text>
                {post.description}
              </Card.Text>
              <Card.Link href={post.url}>{post.url}</Card.Link>
              <Card.Text>
                {post.status}
              </Card.Text>
            </Card.Body>
          </Col>
          <Col>
            <Button variant="success">Edit</Button>
            <Button onClick={deletePost} variant="danger">Delete</Button>
          </Col>
        </Row>
      </Card>
    </>
  )
}

export default Post