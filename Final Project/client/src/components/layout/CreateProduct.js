import postservice from '../../service/postservice'
import { Form, Button } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import { useHistory } from 'react-router-dom'



function CreateProduct() {
  let history = useHistory();
  const onFormSubmit = e => {
    e.preventDefault()
    const formData = new FormData(e.target),
      formDataObj = Object.fromEntries(formData.entries())
    console.log(formDataObj)
    postservice.createPost(formDataObj)
    history.push('/post')
  }
  return (
    <div className='create-post'>
      <h3>Tạo Sản Phẩm</h3>
      <Form onSubmit={onFormSubmit}>
        <Form.Group className='mb-2'>
          <Form.Control type='text' placeholder='Title' name='title' />
        </Form.Group>
        <Form.Group className='mb-2'>
          <Form.Control type='text' placeholder='Description' name='description' />
        </Form.Group>
        <Form.Group className='mb-2'>
          <Form.Control type='text' placeholder='Url' name='url' />
        </Form.Group>
        <Form.Group className='mb-2'>
          <Form.Control type='text' placeholder='Status' name='status' />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default CreateProduct
