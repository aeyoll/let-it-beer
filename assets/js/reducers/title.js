import { UPDATE_TITLE } from '../constants/ActionTypes'

const initialState = 'Let it beer!'

export default function title(state = initialState, action) {
  switch (action.type) {
    case UPDATE_TITLE:
      return action.title

    default:
      return state
  }
}
