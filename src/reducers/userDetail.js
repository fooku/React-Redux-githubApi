import { FETCH_USERNAME } from '../actions'

const initialState = {
  isFetching: false,
  data: {},
  error: null
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERNAME.PENDING:
      return {
        ...state,
        isFetching: true
      }
    case FETCH_USERNAME.SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.payload
      }
    case FETCH_USERNAME.FAILED:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      }
    default:
      return state
  }
}
