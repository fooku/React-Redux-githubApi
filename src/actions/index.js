import API from '../services/api'

const createAction = name => ({
  PENDING: `${name}_PENDING`,
  SUCCESS: `${name}_SUCCESS`,
  FAILED: `${name}_FAILED`
})

export const FETCH_USERNAME = createAction('FETCH_USERNAME')

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
