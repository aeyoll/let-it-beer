import * as types from '../constants/ActionTypes'

export function updateTitle(title) {
  return { type: types.UPDATE_TITLE, title }
}
