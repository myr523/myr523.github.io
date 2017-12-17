/**
 * https://github.com/gaearon/react-hot-boilerplate/blob/next/webpack.config.js
 * @type {file}
 */

import path              from 'path'
import webpack           from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'

const __NODE_ENV__ = JSON.stringify(process.env.NODE_ENV) || 'development'

const mainEntry = ['./src/main.jsx']
const devEntry = [
  'react-hot-loader/patch',
  // activate HMR for React

  'webpack-dev-server/client?http://localhost:3030',
  // bundle the client for webpack-dev-server
  // and connect to the provided endpoint

  'webpack/hot/only-dev-server',
  // bundle the cliFnt for hot reloading
  // only- means to only hot reload for successful updates
]

module.exports = {

  entry: __NODE_ENV__ === 'development' ? mainEntry.concat(devEntry) : mainEntry,

  output: {
    path: path.join(__dirname, '/dist/'),
    publicPath: '/',
    filename: 'bundle.js'
  },

  devtool: __NODE_ENV__ === 'development' ? 'source-map' : void 0,

  resolve: {
    modules: [
      path.resolve(__dirname, 'src'),
      'node_modules',
    ],
    extensions: ['.js', '.jsx', '.json'],
  },

  module: {
    rules: [
      {
        test: /.jsx?$/,
        use: [{ loader: 'babel-loader?compact=false' }]
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]

  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // enable HMR globally

    new webpack.NamedModulesPlugin(),
    // prints more readable module names in the browser console on HMR updates

    new webpack.NoEmitOnErrorsPlugin(),
    // do not emit compiled assets that include errors

    new HtmlWebpackPlugin({ template: './src/index.html' })
  ],

  devServer: {
    contentBase: path.join(__dirname, '/dist/'),
    compress: true,
    host: 'localhost',
    port: 3030,

    historyApiFallback: true,
    // respond to 404s with index.html

    hot: true,
    // enable HMR on the server
  },
}
