import thunk from 'redux-thunk'
import createHistory from 'history/createBrowserHistory'
import createLogger from 'redux-logger'
import { routerMiddleware } from 'connected-react-router'
import { createStore, applyMiddleware } from 'redux'

import createRootReducer from '../reducers'

export const history = createHistory()

const historyRouterMiddleware = routerMiddleware(history)

const store = createStore(
  createRootReducer(history),
  applyMiddleware(thunk, historyRouterMiddleware, createLogger)
)

export default store
