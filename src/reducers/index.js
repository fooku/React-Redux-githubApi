import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import { reducer } from './userDetail'

export default history =>
  combineReducers({
    router: connectRouter(history),
    user: reducer
  })
