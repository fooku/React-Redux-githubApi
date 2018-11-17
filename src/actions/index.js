import API from '../services/api'

const createAction = name => ({
  PENDING: `${name}_PENDING`,
  SUCCESS: `${name}_SUCCESS`,
  FAILED: `${name}_FAILED`
})

export const FETCH_USERNAME = createAction('FETCH_USERNAME')
export const FETCH_REPOS = createAction('FETCH_REPOS')
export const SEARCH_USERS = createAction('SEARCH_USERS')

export const fetchUsername = username => async dispatch => {
  dispatch({
    type: FETCH_USERNAME.PENDING
  })

  try {
    const user = await API.fetchUsername(username)
    dispatch({
      type: FETCH_USERNAME.SUCCESS,
      payload: user
    })
  } catch (error) {
    dispatch({
      type: FETCH_USERNAME.FAILED,
      payload: error
    })
  }
}
export const fetchRepos = username => async dispatch => {
  dispatch({
    type: FETCH_REPOS.PENDING
  })

  try {
    const user = await API.fetchUserRepo(username)
    dispatch({
      type: FETCH_REPOS.SUCCESS,
      payload: user
    })
  } catch (error) {
    dispatch({
      type: FETCH_REPOS.FAILED,
      payload: error
    })
  }
}
export const searchUsername = username => async dispatch => {
  dispatch({
    type: SEARCH_USERS.PENDING
  })

  try {
    const users = await API.searchUsername(username)
    dispatch({
      type: SEARCH_USERS.SUCCESS,
      payload: users
    })
  } catch (error) {
    dispatch({
      type: SEARCH_USERS.FAILED,
      payload: error
    })
  }
}
