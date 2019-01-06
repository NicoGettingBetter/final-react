import { combineForms } from 'react-redux-form'

const project = {
  name: ''
}

const task = {
  done: false,
  name: ''
}

const comment = {
  content: '',
  taskId: null,
  file: null
}

const signup = {
  email: '',
  password: '',
  passwordConfirmation: ''
}

const signin = {
  email: '',
  password: ''
}

export default combineForms({
  comment,
  project,
  signup,
  signin,
  task
}, 'forms')
