import { applyMiddleware, compose, createStore, combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import multiMiddleware from 'redux-multi';

import reducers, { initialStates } from '../reducers';

export default (props, railsContext) => {
  const initialState = {
    ...initialStates,
    railsContext,
  };

  // https://github.com/reactjs/react-router-redux
  const reducer = combineReducers({
    ...reducers,
    routing: routerReducer,
  });

  // Sync dispatched route actions to the history
  const finalCreateStore = compose(
    applyMiddleware(
      multiMiddleware,
      thunkMiddleware,
      createLogger({collapsed: true})
    ),
  )(createStore);

  return finalCreateStore(reducer, initialState);
};
