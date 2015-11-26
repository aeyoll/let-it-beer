// Redux utility functions
import { compose, createStore, applyMiddleware } from 'redux'
// Redux DevTools store enhancers
import { devTools, persistState } from 'redux-devtools'
// Redux router
import { reduxReactRouter } from 'redux-router'
import { createHistory } from 'history'

// Reducers
import rootReducer from '../ducks'

// Redux thunk, for async reducers
import thunk from 'redux-thunk'

export default function configureStore(initialState) {
  let createStoreWithMiddleware

  if (__DEVELOPMENT__ && __DEVTOOLS__) {
    createStoreWithMiddleware = compose(
      // Enables your middleware
      applyMiddleware(thunk),
      reduxReactRouter({
        createHistory
      }),
      // Provides support for DevTools:
      devTools(),
      // Lets you write ?debug_session=<name> in address bar to persist debug sessions
      persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
    )(createStore)
  } else {
    createStoreWithMiddleware = compose(
      applyMiddleware(thunk),
      reduxReactRouter({
        createHistory
      })
    )(createStore)
  }

  const store = createStoreWithMiddleware(rootReducer)

  if (__DEVELOPMENT__ && module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../ducks', () => {
      const nextReducer = require('../ducks')
      store.replaceReducer(nextReducer)
    })
  }

  return store
}
