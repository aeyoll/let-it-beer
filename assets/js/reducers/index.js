import { combineReducers } from 'redux'
import auth from './auth'
import style from './style'
import title from './title'

const rootReducer = combineReducers({
  auth,
  style,
  title
})

export default rootReducer
