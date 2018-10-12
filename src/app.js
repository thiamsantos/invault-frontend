import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {default as ApolloClient} from 'apollo-boost'
import {ApolloProvider} from 'react-apollo'
import {Home, About} from './routes'

const client = new ApolloClient({
  uri: 'https://graphql-pokemon.now.sh'
})

const App = () => (
  <ApolloProvider client={client}>
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </Switch>
    </Router>
  </ApolloProvider>
)

export default App
