// React
import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute } from 'react-router'

// Redux
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'

// Routes
import App from './routes/app'
import Home from './routes/home'
import Search from './routes/search'
import List from './routes/list'
import Detail from './routes/detail'

// Utils
import $ from 'jquery'
import cookie from 'jquery.cookie'

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
        <IndexRoute component={Home} />
        <Route path="search" component={Search} />
        <Route path="list" component={List} />
        <Route path="beer/:beerUuid" component={Detail} />
      </Route>
    </Router>
  </Provider>
), document.getElementById('react-app'))
