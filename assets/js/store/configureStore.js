import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../ducks'
import thunk from 'redux-thunk'

export default function configureStore(initialState) {
  const createStoreWithMiddleware = applyMiddleware(
    thunk
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
