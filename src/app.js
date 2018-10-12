import React from 'react'
import {Home, About} from './routes'

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
    </Switch>
  </Router>
)

export default App
