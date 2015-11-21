// React
import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute } from 'react-router'

// Redux
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import { routerStateChange } from './actions/router'

const store = configureStore()

// Routes
import App from './routes/app'
import Home from './routes/home'
import Signup from './routes/signup'
import LoginRoute from './routes/LoginRoute'
import Search from './routes/search'
import List from './routes/list'
import Detail from './routes/detail'

// Utils
import $ from 'jquery'
import cookie from 'jquery.cookie'
import './polyfill'

$.ajaxSetup({
  headers: { "X-CSRFToken": $.cookie("csrftoken") }
})

// History
import createBrowserHistory from 'history/lib/createBrowserHistory'
let history = createBrowserHistory()

render((
  <Provider store={store}>
    <Router
      history={history}
      onUpdate={function() {
        store.dispatch(routerStateChange(this.state));
      }}
      >
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="signup/" component={Signup} />
        <Route path="login/" component={LoginRoute} />

        <Route requireAuth>
          <Route path="search/" component={Search} />
          <Route path="list/" component={List} />
          <Route path="beer/:beerUuid/" component={Detail} />
        </Route>
      </Route>
    </Router>
  </Provider>
), document.getElementById('react-app'))
