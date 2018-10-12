const browserSync = require('browser-sync').create()
const historyApiFallback = require('connect-history-api-fallback')

browserSync.init({
  server: 'public',
  files: ['public'],
  port: 3000,
  open: false,
  middleware: [historyApiFallback()]
})
