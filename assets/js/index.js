// React
import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute } from 'react-router'

// Redux
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'

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
import cookie from 'jquery.cookie'
import './polyfill'

$.ajaxSetup({
  headers: { "X-CSRFToken": $.cookie("csrftoken") }
})

const store = configureStore()

// History
import createBrowserHistory from 'history/lib/createBrowserHistory'
let history = createBrowserHistory()

render((
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={HomeRoute} />
        <Route path="login/" component={LoginRoute} />
        <Route path="search/" component={SearchRoute} />
        <Route path="list/" component={ListRoute} />
        <Route path="beer/:beerUuid/" component={DetailRoute} />

        <Route path="*" component={NotFoundRoute} status={404} />
      </Route>
    </Router>
  </Provider>
), document.getElementById('react-app'))
