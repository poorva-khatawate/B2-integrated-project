import React from 'react'
import ReactDOM from 'react-dom'
import {
  Redirect,
  Route,
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom'

import './style.css'
import DataPage from './views/datafet'
import Home from './views/home'
import Page from './views/page'


const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={Home} exact path="/" />
        <Route component={Page} exact path="/page" />
        <Route component={DataPage} exact path="/datafet" />

        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
