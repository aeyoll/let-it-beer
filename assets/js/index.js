import React from 'react'
import { render } from 'react-dom'
import { Router, Route } from 'react-router'
import App from './routes/app'
import Search from './routes/search'
import List from './routes/list'
import Detail from './routes/detail'

render((
  <Router>
    <Route path="/" component={App}>
      <Route path="search" component={Search} />
      <Route path="list" component={List} />
      <Route path="beer/:beerUuid" component={Detail} />
    </Route>
  </Router>
), document.getElementById('react-app'))
