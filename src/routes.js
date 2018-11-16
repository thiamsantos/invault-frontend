import React from 'react'
import Loadable from 'react-loadable'

const Loading = () => <div>loading...</div>

export const Home = Loadable({
  loader: () => import('./screens/home'),
  loading: Loading
})

export const About = Loadable({
  loader: () => import('./screens/about'),
  loading: Loading
})

export const Register = Loadable({
  loader: () => import('./screens/register/index.js'),
  loading: Loading
})
