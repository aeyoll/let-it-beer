var path = require("path")
var webpack = require('webpack')
var BundleTracker = require('webpack-bundle-tracker')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  context: __dirname,

  entry: './assets/js/index',

  output: {
    path: path.resolve('./assets/bundles/'),
    filename: "[name]-[hash].js"
  },

  plugins: [
    new ExtractTextPlugin('[name]-[hash].css', { allChunks: true })
  ],

  module: {
    loaders: [
      {
        test: /(\.scss|\.css)$/,
        loader: ExtractTextPlugin.extract("style", "css?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss!sass?sourceMap")
      },
      {
        test: /(\.js|\.jsx)$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          cacheDirectory: true,
          presets: ['es2015', 'react']
        }
      },
    ],
  },

  postcss: [
    require('autoprefixer')
  ],

  resolve: {
    modulesDirectories: ['node_modules', 'bower_components'],
    extensions: ['', '.jsx', '.scss', '.js', '.json']
  },
}
