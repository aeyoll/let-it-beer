import { combineReducers } from 'redux'
// import { default as style } from './style'
// import { default as title } from './title'
import style from './style'
import title from './title'

const rootReducer = combineReducers({
  style,
  title
})

export default rootReducer
