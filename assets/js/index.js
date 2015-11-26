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
import LogoutRoute from './routes/LogoutRoute'
import SearchRoute from './routes/SearchRoute'
import ListRoute from './routes/ListRoute'
import DetailRoute from './routes/DetailRoute'
import NotFoundRoute from './routes/NotFoundRoute'

// Utils
import $ from 'jquery'
import Cookie from 'js-cookie'
import './polyfill'

// React components for Redux DevTools
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react'

$.ajaxSetup({
  headers: { 'X-CSRFToken': Cookie.get('csrftoken') }
})

// History
import createBrowserHistory from 'history/lib/createBrowserHistory'
let history = createBrowserHistory()

// Authentication
import { loginUserSuccess, tokenVerify } from './ducks/auth'
let token = Cookie.get('token')

if (token !== undefined && token !== null) {
  store.dispatch(tokenVerify(token))
}

const requireLogin = (nextState, replaceState) => {
  const { auth: { isAuthenticated }} = store.getState()

  if (!isAuthenticated) {
    replaceState({ nextPathname: nextState.location.pathname }, '/login/')
  }
}

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={HomeRoute} />

    <Route onEnter={requireLogin}>
      <Route path="search/" component={SearchRoute} />
      <Route path="list/" component={ListRoute} />
      <Route path="beer/:beerUuid/" component={DetailRoute} />
    </Route>

    <Route path="login/" component={LoginRoute} />
    <Route path="logout/" component={LogoutRoute} />

    <Route path="*" component={NotFoundRoute} status={404} />
  </Route>
)

const router = (
  <Router history={history}>
    {routes}
  </Router>
)

const provider = (
  <Provider store={store}>
    {router}
  </Provider>
)

render((
    <div>
      {provider}
      { __DEVTOOLS__ && <DebugPanel top right bottom>
        <DevTools store={store} monitor={LogMonitor} />
      </DebugPanel> }
    </div>
), document.getElementById('react-app'))
