import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import login from '../../assets/img/login.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';
import {MdOutlineAlternateEmail} from 'react-icons/md';
import {FaLock} from 'react-icons/fa';
import GoogleButton from 'react-google-button';


const Login =()=> {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <div>
    
    <div className='split right'>
        <div  className='position-absolute end-5 login'>
        <h1>Login</h1>
        <div className='line'>
        <div class="draw-line"></div>
        </div>
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-5">
        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
          <div className='input'>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend"><MdOutlineAlternateEmail/></InputGroup.Text>
            <Form.Control
              type="email"
              placeholder="email"
              aria-describedby="inputGroupPrepend"
              required
              className='shadow'
            />
            <Form.Control.Feedback type="invalid">
              Por favor escribe un email.
            </Form.Control.Feedback>
          </InputGroup></div>
        </Form.Group>
      </Row>
     <Row className="mb-5">
        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
         
          <div className='input'>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend"><FaLock/></InputGroup.Text>
            <Form.Control
              type="password"
              placeholder="contraseña"
              aria-describedby="inputGroupPrepend"
              required
              className='shadow'
            />
            <Form.Control.Feedback type="invalid">
              Por favor escribe una contraseña.
            </Form.Control.Feedback>
          </InputGroup></div>
        </Form.Group>
      </Row>
    <Row className='d-flex justify-content-center align-items-center'>
      <Button className='btn shadow' type="submit">Login</Button></Row>   
     
    

            <div className='container '>
             <div class="option-line2"></div>
            <div className="or2">Or</div>
            </div>
     
     <Row className='d-flex justify-content-center align-items-center'>
      <GoogleButton className='mt-5 '
  onClick={() => { console.log('Google button clicked') }}
/></Row>
    </Form></div>
    </div>
    <div className='split left'>
        <img src={login} alt='loginuser'/>
    </div>
    </div>
  );
}


export default Login