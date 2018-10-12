import React from 'react'
import Button from '@material-ui/core/Button'
import SaveIcon from '@material-ui/icons/Save'

import {Link} from 'react-router-dom'

const Home = () => (
  <div>
    <Link to="/about">
      <Button variant="contained" color="primary">
        about
        <SaveIcon />
      </Button>
    </Link>
  </div>
)

export default Home
