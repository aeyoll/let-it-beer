import * as types from '../constants/ActionTypes'

export function updateAppClass(className) {
  return { type: types.UPDATE_APP_CLASS, className }
}

export function updateTitle(title) {
  return { type: types.UPDATE_TITLE, title }
}

