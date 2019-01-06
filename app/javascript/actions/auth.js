import api from 'utils/api'

export const signIn = (data) => api.post({
  endpoint: '/api/v1/auth/sign_in',
  body: data,

  types: [
    'USER_SIGN_IN_REQUEST',
    'USER_SIGN_IN_SUCCESS',
    'USER_SIGN_IN_FAILURE'
  ]
})
