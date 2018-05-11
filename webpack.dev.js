const merge = require('webpack-merge')//用于合并文件
const path = require('path')
const webpack = require('webpack')
const common = require('./webpack.common')

module.exports = merge(common, {
  output: {
    path: path.resolve(__dirname, '/'),
    publicPath: '/',
    filename: '[name].[hash:8].js'
  },
  devtool: '#source-map',// 便于调试
  devServer: {
    port: 8888,
    hot: true,
    // inline: true,
    // 文件更新，页面自动刷新
    host: '0.0.0.0',
    // 允许本地ip访问
    historyApiFallback: true,
    stats: 'errors-only'// 仅显示错误日志
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
})
