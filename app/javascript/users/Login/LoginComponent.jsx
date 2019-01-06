import React from 'react'
import { Alert, Col, Button } from 'react-bootstrap'
import { Form, Control } from 'react-redux-form'

const LoginComponent = ({ onSubmit, onSuccess, onError }) =>
  <div className='row'>
    <Col sm={8} smOffset={2} md={6} mdOffset={3}>
      <h2>Sign In</h2>
      <Alert bsStyle='danger'>
        <p className='mb-10'>Incorrect login or(and) password.</p>
      </Alert>
      <Form model='forms.signin' onSubmit={(data) => onSubmit(data).then((action) => action.error ? onError(action) : onSuccess(action))}>
        <div className='mb-20'>
          <Control.input model='.email' className='form-control mb-10' placeholder='Email' />
          <Control.input model='.password' type='password' className='form-control mb-10' placeholder='Password' />
        </div>
        <Button type='submit' bsStyle='primary' className='mb-15 mr-15'>
          Sign In
        </Button>
        <p>Do not have an account? <a href='/sign-up'>Sign Up</a></p>
      </Form>
    </Col>
  </div>

export default LoginComponent
