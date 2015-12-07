import { combineReducers } from 'redux'
import { routerStateReducer } from 'redux-router';

import app from './app'
import auth from './auth'
import beers from './beers'

const rootReducer = combineReducers({
  router: routerStateReducer,
  app,
  auth,
  beers
})

export default rootReducer
