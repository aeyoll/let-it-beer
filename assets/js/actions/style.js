import * as types from '../constants/ActionTypes'

export function updateAppClass(className) {
  return { type: types.UPDATE_APP_CLASS, className }
}
