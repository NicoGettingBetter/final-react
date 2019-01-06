import { combineReducers } from 'redux'

import isEmpty from 'lodash/isEmpty'

export const initialState = {
  loaded: false,
  ids: []
}

const loaded = (state = initialState.loaded, action) => {
  switch (action.type) {
    case 'COMMENTS_LOAD_SUCCESS':
      return true
    case 'COMMENTS_LOAD_REQUEST':
    case 'COMMENTS_LOAD_FAILURE':
      return false
    default:
      return state
  }
}

const ids = (state = initialState.ids, action) => {
  switch (action.type) {
    case 'COMMENTS_LOAD_SUCCESS':
      return isEmpty(action.payload.results) ? [] : action.payload.results.comments
    case 'CREATE_COMMENT_SUCCESS':
      return [...state, ...action.payload.results.comments]
    case 'DELETE_COMMENT_SUCCESS':
      const deleteIndex = state.indexOf(action.payload.results.comments[0])
      state.splice(deleteIndex, 1)

      return state
    default:
      return state
  }
}

export default combineReducers({
  ids,
  loaded
})
