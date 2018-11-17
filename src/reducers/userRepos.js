import { FETCH_REPOS } from '../actions'

const initialState = {
  isFetching: false,
  data: [],
  error: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_REPOS.PENDING:
      return {
        ...state,
        isFetching: true
      }
    case FETCH_REPOS.SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.payload
      }
    case FETCH_REPOS.FAILED:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      }
    default:
      return state
  }
}
