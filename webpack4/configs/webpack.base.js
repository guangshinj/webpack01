
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  mode: 'production',
  entry: {
    app: './src/index.js',
  },
  output: {
    filename: '[name].js',
    path: 'dist'
  },
  module: {
    rules: [
      // {
      //   test: /\.vue$/,
      //   use: [{
      //     loader: 'style-loader'
      //   }]
      // },
      // {
      //   test: /\.js$/,
      //   use: [
      //     {
      //       loader: 'webpack/loaders/js-pre.js',
      //       options: {}
      //     },
      //     {
      //       loader: 'webpack/loaders/js-foo.js',
      //       options: {}
      //     },
      //     {
      //       loader: 'webpack/loaders/js-bar.js',
      //       options: {}
      //     }
      //   ]
      // },
      // {
      //   test: /\.css$/, use: ['style-loader', 'css-loader']
      // },
      // {
      //   test: /\.ts$/, use: ['ts-loader']
      // }
    ]
  }
}