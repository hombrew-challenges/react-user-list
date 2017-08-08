import React from 'react'
import {Route, IndexRoute} from 'react-router'

// routes paths
import {
  ROUTE_ROOT
} from '../constants/routes'

// components
import App from 'app/views'

// views
import UserListView from 'app/views/user-list'

/**
 * Routing Component
 */
export default (
  <Route path={ROUTE_ROOT} component={App}>
    <IndexRoute component={UserListView}/>
  </Route>
)
