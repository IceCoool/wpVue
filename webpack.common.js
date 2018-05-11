const path = require('path')
const webpack = require('webpack')
const htmlWebpackPlugin = require('html-webpack-plugin')
const extractTextPlugin = require('extract-text-webpack-plugin')
let commonConfig = {
  // 入口文件
  entry: {
    main: path.resolve(__dirname, 'src/index.js'),
    vendors: ['vue']
  },
  devServer: {
    port: 8888, // 端口
    inline: true, // 热更新
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: {
            presets: ['es2015']
        },
        // 排除依赖的文件
        exclude: /node_modules/
      },
      {
          test: /\.css/,
          use: extractTextPlugin.extract({
              use: 'css-loader'
          })
      },
      {
          test: /\.scss$/,
          use: extractTextPlugin.extract({
              fallback: 'style-loader',
              use: ['css-loader','sass-loader']
          })
      },
      {
          test: /\.(png|woff|woff2|eot|ttf|svg|jpg)$/,
          loader: 'url-loader',
          options: {
              limit: 8192,
              name: 'images/[hash:8].[name].[ext]'
          }
      }
    ]
  },
  resolve: {
    alias: {
      style: path.resolve(__dirname, 'src/style/'),
      images: path.resolve(__dirname,'src/images')
    },
    extensions: ['.js']
  },
  plugins: [
      new htmlWebpackPlugin({
        template: './template.ejs',
        title: 'hhhh',
        inject: 'body'
      }),
      new extractTextPlugin('style.[contenthash:8].css'),
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendors'
      })
  ]
}

module.exports = commonConfig