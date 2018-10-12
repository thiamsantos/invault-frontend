import React from 'react'
import {Link} from 'react-router-dom'
import {Helmet} from 'react-helmet'
import {getText} from '../core/intl'

const About = () => (
  <div>
    <Helmet>
      <title>{getText('en', 'about.title')}</title>
    </Helmet>
    <h1>{getText('en', 'about.title')}</h1>
    <Link to="/">{getText('en', 'about.homeLink')}</Link>
  </div>
)

export default About
