// Redux utility functions
import { compose, createStore, applyMiddleware } from 'redux';
// Redux DevTools store enhancers
import { devTools, persistState } from 'redux-devtools';

// Reducers
import rootReducer from '../ducks'

// Redux thunk, for async reducers
import thunk from 'redux-thunk'

export default function configureStore(initialState) {
  const createStoreWithMiddleware = compose(
    // Enables your middleware
    applyMiddleware(thunk),
    // Provides support for DevTools:
    devTools(),
    // Lets you write ?debug_session=<name> in address bar to persist debug sessions
    persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
  )(createStore);

  const store = createStoreWithMiddleware(rootReducer)

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../ducks', () => {
      const nextReducer = require('../ducks')
      store.replaceReducer(nextReducer)
    })
  }

  return store
}
