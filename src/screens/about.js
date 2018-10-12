import React from 'react'
import {Link} from 'react-router-dom'
import {getText} from '../core/intl'

const About = () => (
  <div>
    <h2>{getText('en', 'about.title')}</h2>
    <Link to="/">{getText('en', 'about.homeLink')}</Link>
  </div>
)

export default About
