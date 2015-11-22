import { combineReducers } from 'redux'
import { routerStateReducer } from 'redux-router';

import app from './app'
import auth from './auth'

const rootReducer = combineReducers({
  router: routerStateReducer,
  app,
  auth
})

export default rootReducer
