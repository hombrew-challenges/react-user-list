import React from 'react'
import {Route, IndexRoute} from 'react-router'

// routes
import {
  ROUTE_ROOT
} from '../constants/routes'

// components
import App from '../components/App'

// views
import UserList from 'app/views/user-list'

export default (
  <Route path={ROUTE_ROOT} component={App}>
    <IndexRoute component={UserList}/>
  </Route>
)
