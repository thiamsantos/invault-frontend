import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {default as ApolloClient} from 'apollo-boost'
import {ApolloProvider} from 'react-apollo'
import {MuiThemeProvider} from '@material-ui/core/styles'
import {Home, About, Register} from './routes'
import {theme} from './theme'

const client = new ApolloClient({
  uri: 'https://graphql-pokemon.now.sh'
})

const App = () => (
  <ApolloProvider client={client}>
    <MuiThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/register" component={Register} />
        </Switch>
      </Router>
    </MuiThemeProvider>
  </ApolloProvider>
)

export default App
