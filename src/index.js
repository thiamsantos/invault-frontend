import React from 'react'
import ReactDOM from 'react-dom'
import Loadable from 'react-loadable'

const Loading = () => <div>loading...</div>

export const LazyApp = Loadable({
  loader: () => import('./app'),
  loading: Loading
})

ReactDOM.render(<LazyApp />, document.getElementById('app'))
