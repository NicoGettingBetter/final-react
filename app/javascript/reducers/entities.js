import merge from 'lodash/merge'
import { normalizeEntity } from 'utils/normalizer'

export const initialState = {
  projects: {},
  tasks: {},
  comments: {}
}

const reducer = (state = initialState, action) => {
  if (action.payload && action.payload.entities) {
    return merge({}, state, action.payload.entities)
  }

  return state
}

export default reducer
