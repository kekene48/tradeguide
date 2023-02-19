import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './index.scss';
import Home from './Home/Home';
import Main from './Main/Main';
import Error from './Error'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/main'>
          <Main />
        </Route>
        <Route path='*'>
          <Error />
        </Route>
      </Switch>
    </Router>
  )
}

export default App