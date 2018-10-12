const path = require('path')
const DotenvPlugin = require('dotenv-webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin')
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')
const isCI = require('is-ci')

const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  entry: {
    app: path.resolve(__dirname, 'src/index.js'),
    vendor: ['@babel/polyfill', 'react', 'react-dom']
  },
  resolve: {aliasFields: ['browser']},
  devtool: isProd ? false : 'cheap-module-source-map',
  plugins: [
    new CleanWebpackPlugin(['public/static/*.js', 'public/index.html']),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      filename: path.resolve(__dirname, 'public/index.html')
    }),
    new DotenvPlugin({
      safe: true,
      systemvars: true,
      silent: isCI
    }),
    new LodashModuleReplacementPlugin(),
    new FaviconsWebpackPlugin(path.resolve(__dirname, 'logo.png'))
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          name: 'vendor',
          chunks: 'all',
          minChunks: 2
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: 'babel-loader'
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [{loader: 'url-loader', options: {limit: 8192}}]
      },
      {
        test: /\.svg/,
        use: {
          loader: 'svg-url-loader',
          options: {limit: 4096, noquotes: true}
        }
      }
    ]
  },
  output: {
    filename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, 'public/static'),
    publicPath: '/static/'
  }
}
