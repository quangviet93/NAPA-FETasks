import { Card, Row, Col } from 'react-bootstrap';


const Post = (props) => {
  const { post, index } = props;
  return (
    <>
      <Card
        style={{ width: '18rem' }}
        className="m-4"
      >
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
      </Card>
    </>
  )
}

export default Post