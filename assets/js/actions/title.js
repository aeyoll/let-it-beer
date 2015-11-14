import * as types from '../constants/title'

export function updateTitle(title) {
  return { type: types.UPDATE_TITLE, title }
}
