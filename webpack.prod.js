const merge = require('webpack-merge')
const path = require('path')
const webpack = require('webpack')
const common = require('./webpack.common')

module.exports = merge(common, {
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
    filename: '[name].[hash:8].js'
  },
  plugins: [
    // js 压缩
    new webpack.optimize.UglifyJsPlugin({ compress: {warnings: false}})
  ]
})
