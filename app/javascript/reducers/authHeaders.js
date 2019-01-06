import { getHeaders } from 'utils/auth'

export const initialState = getHeaders()

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'USER_SIGN_IN_SUCCESS':
      return action.meta
    case 'USER_SIGN_OUT_REQUEST':
      return {}
    default:
      return state
  }
}

export default reducer
