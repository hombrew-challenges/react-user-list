import {handleActions} from 'redux-actions'
import {fromJS} from 'immutable'
import {
  USER_LIST_LOADING,
  USER_LIST_SET_USERS,
  USER_LIST_UPDATE_FILTER
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
      _limit: 6,
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
  let newState = state
  if (action.payload.status === 200) {
    newState = newState
      .set('list', fromJS(action.payload.data))
      .set('loading', false)
      .set('cached', true)
  }
  return newState
}

/**
 * Users filters update
 */
actionMap[USER_LIST_UPDATE_FILTER] = (state, action) => {
  let newState = state
  const filters = action.payload
  const filterKeys = Object.keys(filters)
  filterKeys.forEach((key) => {
    newState = newState.setIn(['filters', key], filters[key])
  })
  if (filterKeys.includes('q')) {
    newState = newState.setIn(['filters', '_page'], 1)
  }
  return newState
}

export default handleActions(actionMap, initialState)