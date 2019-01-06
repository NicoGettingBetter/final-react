import React, { Component } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'

import { signIn } from 'actions/auth'
import { persistHeaders } from 'utils/auth'

import LoginComponent from './LoginComponent'

const onSuccess = (history, action) => {
  persistHeaders(action.meta)
  const data = action.payload.data

  return history.push('/')
}

const onError = (action) => console.log('Error', action)

const mapDispatchToProps = (dispatch, props) => {
  return {
    onSubmit: (data) => dispatch(signIn(data)),
    onSuccess: (action) => onSuccess(props.history, action),
    onError
  }
}

export default connect(null, mapDispatchToProps)(LoginComponent)
