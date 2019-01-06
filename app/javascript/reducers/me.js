import { combineReducers } from 'redux'

import isEmpty from 'lodash/isEmpty'

// reducers

export const initialState = {
  me: {}
}

const me = (state = initialState.me, action) => {
  switch (action.type) {
    case 'USER_SIGN_IN_SUCCESS':
      return action.payload.data
    case 'SIGN_OUT_SUCCESS':
    case 'SIGN_OUT_FAILURE':
      return initialState.me
    case 'PORTFOLIO_UPLOADED':
      return {...state, portfolioUploaded: true}
    default:
      return state
  }
}

export default combineReducers({
  me
})

// helpers

export const getMe = (state) => state.me

export const isAuthenticated = state => !isEmpty(getMe(state))
