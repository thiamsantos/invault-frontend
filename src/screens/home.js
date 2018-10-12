import React from 'react'
import Button from '@material-ui/core/Button'
import SaveIcon from '@material-ui/icons/Save'
import {Link} from 'react-router-dom'
import {Query} from 'react-apollo'
import gql from 'graphql-tag'

const PIKACHU_QUERY = gql`
  {
    pokemon(name: "Pikachu") {
      id
      number
      name
    }
  }
`

const Pikachu = () => (
  <Query query={PIKACHU_QUERY}>
    {({loading, error, data}) => {
      if (loading) return <p>Loading...</p>
      if (error) return <p>Error :(</p>

      const {id, number, name} = data.pokemon

      return (
        <div>
          <p>ID: {id}</p>
          <p>Number: {number}</p>
          <p>Name: {name}</p>
        </div>
      )
    }}
  </Query>
)

const Home = () => (
  <div>
    <Pikachu />
    <Link to="/about">
      <Button variant="contained" color="primary">
        about
        <SaveIcon />
      </Button>
    </Link>
  </div>
)

export default Home
