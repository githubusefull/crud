import React, { useState } from 'react'
import './Register.css';
import { Button, Col, Form, Row } from 'react-bootstrap';
import axios from 'axios';

function Register() {

  const [post , setPost] = useState({
    name:"",
    phone:"",
    email:"",
    password:"",
  });
  const handleChnage = (event) => {
    const {name, value} = event.target;
    setPost((prev) => {
      return {
        ...prev,
        [name]:value,
      }
    })
  }
 
  const handleClick =(event) => {
    event.preventDefault();
    axios.post("http://localhost:8000/register", post)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
  }
  return (
    <div className='register  text-start'>
   
    <div className='register-card'>

     <h4 className='text-start my-4'> Register</h4>
        <Form>

        <Row className="mb-5">
        <Form.Group as={Col} md="6" >
          <Form.Label className='text'>Name</Form.Label>
          <Form.Control
          value={post.name}
            type="text"
            placeholder="Name"
            name="name"
            id='input-form'
            onChange={handleChnage} 
            />
      </Form.Group>
      <Form.Group as={Col} md="6" >
          <Form.Label className='text'>Phone</Form.Label>
          <Form.Control
             value={post.phone}
            type="number"
            placeholder="Phone"
            name="phone"
            id='input-form'
            onChange={handleChnage}
          />
      </Form.Group>
      <Form.Group as={Col} md="12"  className='my-3'>
          <Form.Label className='text'>Email</Form.Label>
          <Form.Control
            value={post.email}
            type="email"
            placeholder="Email"
            name="email"
            id='input-form'
            onChange={handleChnage}
          />
      </Form.Group>
       
   
         
       
      <Form.Group as={Col} md="12" >
          <Form.Label className='text'>Password</Form.Label>
          <Form.Control
           value={post.password}
            type="password"
            placeholder="Password"
            name="password"
            id='input-form'
            onChange={handleChnage}
          />
       </Form.Group>
      
       </Row>  
    <Button variant="dark" type='submit' onClick={handleClick} className='text-center' >
      Register
    </Button>
    
  </Form>
 
  </div>
  </div>

  )
}

export default Register