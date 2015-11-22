const UPDATE_APP_CLASS = 'UPDATE_APP_CLASS'
const UPDATE_APP_TITLE = 'UPDATE_APP_TITLE'

const initialState = {
  api: '/api/v1',
  style: '',
  title: 'Let it beer!'
}

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case UPDATE_APP_CLASS:
      return {
        ...state,
        style: action.className
      }

    case UPDATE_APP_TITLE:
      return {
        ...state,
        title: action.title
      }

    default:
      return state
  }
}

export function updateAppClass(className) {
  return { type: UPDATE_APP_CLASS, className }
}

export function updateAppTitle(title) {
  return { type: UPDATE_APP_TITLE, title }
}
