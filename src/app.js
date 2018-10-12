import React from 'react'
import Button from '@material-ui/core/Button'
import SaveIcon from '@material-ui/icons/Save'

import { BrowserRouter as Router, Route, Link,Switch } from "react-router-dom"

const Home = () => (
  <div>
<Link to="/about"><Button variant="contained" color="primary">
  about<SaveIcon/>
</Button></Link>
</div>
);

const About = () => (
  <div>
    <h2>About</h2>
<Link to="/">home</Link>

  </div>
);


const App = () => (
  <Router>
    <Switch>

  <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
    </Switch>
    </Router>
)

export default App
