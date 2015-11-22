import { combineReducers } from 'redux'
import { routerStateReducer } from 'redux-router';

import app from './app'

const rootReducer = combineReducers({
  router: routerStateReducer,
  app
})

export default rootReducer
