const path = require('path')
const merge = require('webpack-merge')
const common = require('./webpack.base.config')
const webpack = require('webpack')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  output: {
    filename: 'js/[name].js',
    chunkFilename: 'js/[name].js',
  },
  devServer: {
    contentBase: path.resolve(__dirname, '../dist'),
    open: false,
    port: 9000,
    compress: true,
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
})