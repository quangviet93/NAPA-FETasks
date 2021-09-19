import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import authservice from '../../server/authservice';

const RegisterForm = () => {
  const onFormSubmit = e => {
    e.preventDefault()
    const formData = new FormData(e.target),
      formDataObj = Object.fromEntries(formData.entries())
    console.log(formDataObj)
    authservice.register(formDataObj)
  }
  return (
    <>
      <Form className='my-4' onSubmit={onFormSubmit}>
        <Form.Group className='mb-2'>
          <Form.Control type='text' placeholder='Username' name='username' required />
        </Form.Group>
        <Form.Group className='mb-2'>
          <Form.Control type='text' placeholder='Password' name='password' required />
        </Form.Group>
        <Form.Group className='mb-2'>
          <Form.Control type='text' placeholder='Confirm Password' name='confirmPassword' required />
        </Form.Group>
        <Button variant='success' type='submit'>
          Register
          </Button>
      </Form>
      <p>Already have an account?
        <Link to='/login'>
          <Button variant='primary' size='sm' className='ml-2'>
            Login
          </Button>
        </Link>
      </p>
    </>
  )
}

export default RegisterForm

