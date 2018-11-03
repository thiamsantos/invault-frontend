import React from 'react'
import Button from '@material-ui/core/Button'
import SaveIcon from '@material-ui/icons/Save'
import {Link} from 'react-router-dom'
import {Query} from 'react-apollo'
import gql from 'graphql-tag'
import {Helmet} from 'react-helmet'
import {getText} from '../core/intl'

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
          <p>{getText('en', 'home.pokemon.id', [id])}</p>
          <p>{getText('en', 'home.pokemon.number', [number])}</p>
          <p>{getText('en', 'home.pokemon.name', [name])}</p>
        </div>
      )
    }}
  </Query>
)

const Home = () => (
  <div>
    <Helmet>
      <title>{getText('en', 'home.title')}</title>
    </Helmet>
    <h1>{getText('en', 'home.title')}</h1>
    <Pikachu />
    <Link to="/about">
      <Button variant="contained" color="primary">
        {getText('en', 'home.aboutLink')}
        <SaveIcon />
      </Button>
    </Link>

    <Link to="/register">
      <Button variant="contained" color="primary">
        {getText('en', 'home.registerLink')}
        <SaveIcon />
      </Button>
    </Link>


  </div>
)

export default Home


