import {createStore, applyMiddleware} from 'redux'
import ReduxPromise from 'redux-promise'

import rootReducer from '../reducers/index'

export default function (initialState) {
  const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore)
  return createStoreWithMiddleware(rootReducer, initialState)
}
