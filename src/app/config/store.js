import {createStore, applyMiddleware} from 'redux'

import rootReducer from '../reducers/index'

import ReduxPromise from 'redux-promise'
import thunk from 'redux-thunk'
import {createLogger} from 'redux-logger'

/**
 *  Initializes redux store
 * @param {Any} initialState Redux store preloaded state
 */
export default function (initialState) {
  if (process.env.NODE_ENV === 'development') {
    return createStore(
      rootReducer,
      initialState,
      applyMiddleware(thunk, ReduxPromise, createLogger({collapsed: true}))
    )
  } else {
    return createStore(
      rootReducer,
      initialState,
      applyMiddleware(thunk, ReduxPromise)
    )
  }
}
