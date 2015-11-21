import { UPDATE_APP_CLASS } from '../constants/ActionTypes'

const initialState = ''

export default function style(state = initialState, action) {
  switch (action.type) {
    case UPDATE_APP_CLASS:
      return action.className

    default:
      return state
  }
}
