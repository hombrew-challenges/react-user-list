import {handleActions} from 'redux-actions'
import {fromJS} from 'immutable'
import {
  USER_LIST_LOADING,
  USER_LIST_SET_USERS,
  USER_LIST_UPDATE_FILTER,
  USER_LIST_DELETE_USER
} from 'app/actions/users'

/**
 * User reducer initial state
 */
const initialState = fromJS({
    list: [],
    loading: false,
    cached: false,
    filters: {
      _page: 1,
      _limit: 10,
      q: ''
    }
})

let actionMap = {}

/**
 * Users requested
 */
actionMap[USER_LIST_LOADING] = (state, action) => {
  return state.set('loading', true)
}

/**
 * Users received
 */
actionMap[USER_LIST_SET_USERS] = (state, action) => {
  return state
    .set('list', fromJS(action.payload.data))
    .set('loading', false)
    .set('cached', true)
}

/**
 * Users filters update
 */
actionMap[USER_LIST_UPDATE_FILTER] = (state, action) => {
  let newState = state
  const filters = action.payload
  Object.keys(filters).forEach((key) => {
    newState = newState.setIn(['filters', key], filters[key])
  })
  return newState
}

/**
 * User deleted from List
 */
actionMap[USER_LIST_DELETE_USER] = (state, action) => {
  let newState = state
  const {status, data} = action.payload
  if (status === 200) {
    newState = newState.update(
      'list',
      (list) => list.delete(
        list.findIndex(item => item.get('id') === data.id)
      )
    )
  }
  return newState
}

export default handleActions(actionMap, initialState)