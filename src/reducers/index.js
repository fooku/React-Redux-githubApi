import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import userDetail from './userDetail'
import userRepos from './userRepos'
import userList from './userList'

export default history =>
  combineReducers({
    router: connectRouter(history),
    user: userDetail,
    repos: userRepos,
    users: userList
  })
