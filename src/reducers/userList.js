import { SEARCH_USERS } from '../actions'

const initialState = {
  isFetching: false,
  data: [],
  error: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_USERS.PENDING:
      return {
        ...state,
        isFetching: true
      }
    case SEARCH_USERS.SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.payload
      }
    case SEARCH_USERS.FAILED:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      }
    default:
      return state
  }
}
