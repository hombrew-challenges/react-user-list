import { createAction } from 'redux-actions'
import api from 'app/config/api'
import {API_USER, API_USER_LIST} from 'app/constants/api'

/**
 * Sets loading state to true, to let user know data is being loaded.
 */
export const USER_LIST_LOADING = 'USER LIST :: LOADING'
const startLoading = createAction(USER_LIST_LOADING)

/**
 * Sets user list with api response
 */
export const USER_LIST_SET_USERS = 'USER LIST :: SET USERS'
const setUserList = createAction(
  USER_LIST_SET_USERS,
  (params) => api.get(API_USER_LIST, {params})
)

/**
 * Starts loader and gets new user data based on params
 * @param {Object} params request params (_page, _limit, q) 
 */
export function getUserList(params) {
  return (dispatch, getState) => {
    dispatch(startLoading())
    params = params || getState().users.get('filters').toObject()
    dispatch(setUserList(params))
  }
}

/**
 * Updates user list filters
 */
export const USER_LIST_UPDATE_FILTER = 'USER LIST :: UPDATE FILTER'
const updateFilter = createAction(USER_LIST_UPDATE_FILTER)

/**
 * Gets new user data if filters changed
 * @param {Object} filters user list filters (_page, _limit, q)
 */
export function updateUserListFilter(filters = {}) {
  return (dispatch, getState) => {
    const oldFilterState = getState().users.get('filters')
    dispatch(updateFilter(filters))
    const newFilterState = getState().users.get('filters')
    if (oldFilterState !== newFilterState) {
      const params = newFilterState.toObject()
      dispatch(getUserList(params))
    }
  }
}

/**
 * Deletes user from list
 */
export const USER_LIST_DELETE_USER = 'USER LIST :: DELETE USER'
const deleteUser = createAction(
  USER_LIST_DELETE_USER,
  (id) => new Promise(
    (resolve, reject) => api
      .delete(API_USER(id))
      .then(response => resolve({...response, data: {id}}))
  )
)

/**
 * Starts Loader and deletes an user
 * @param {Number} id 
 */
export function deleteUserFromList(id) {
  return (dispatch, getState) => {
    dispatch(startLoading())
    dispatch(deleteUser(id))
  }
}