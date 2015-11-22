// React
import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute } from 'react-router'

// Redux
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
const store = configureStore()

// Routes
import App from './routes/App'
import HomeRoute from './routes/HomeRoute'
import LoginRoute from './routes/LoginRoute'
import SearchRoute from './routes/SearchRoute'
import ListRoute from './routes/ListRoute'
import DetailRoute from './routes/DetailRoute'
import NotFoundRoute from './routes/NotFoundRoute'

// Utils
import $ from 'jquery'
import Cookie from 'js-cookie'
import './polyfill'

$.ajaxSetup({
  headers: { "X-CSRFToken": Cookie.get("csrftoken") }
})

// History
import createBrowserHistory from 'history/lib/createBrowserHistory'
let history = createBrowserHistory()

// Authentication
import { isLoaded as isAuthLoaded, load as loadAuth } from './ducks/auth'

const requireLogin = (nextState, replaceState, cb) => {
  function checkAuth() {
    const { auth: { token }} = store.getState()
    if (!token) {
      // oops, not logged in, so can't be here!
      replaceState(null, '/')
    }

    cb()
  }

  // Do a redirect here
}

render((
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={HomeRoute} />

        <Route onEnter={requireLogin}>
          <Route path="search/" component={SearchRoute} />
          <Route path="list/" component={ListRoute} />
          <Route path="beer/:beerUuid/" component={DetailRoute} />
        </Route>

        <Route path="login/" component={LoginRoute} />

        <Route path="*" component={NotFoundRoute} status={404} />
      </Route>
    </Router>
  </Provider>
), document.getElementById('react-app'))
