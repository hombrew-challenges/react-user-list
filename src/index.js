// react
import React from 'react'
import ReactDOM from 'react-dom'

// redux
import {Provider} from 'react-redux'
import configureStore from './app/config/store'

// router
import {Router, browserHistory} from 'react-router'
import routes from './app/config/routes'

import registerServiceWorker from './registerServiceWorker'

// styles
import 'bootstrap/dist/css/bootstrap.css'
import 'react-bootstrap-table/css/react-bootstrap-table.css'
import 'font-awesome/css/font-awesome.css'
import './assets/styles/main.css'

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes}/>
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker()
