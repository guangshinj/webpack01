
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const extractCss = new ExtractTextPlugin("styles.css")
// const extractTextCSS1 = extractCss.extract(['css-loader', "stylus-loader"])
// console.info('???', extractTextCSS1)

module.exports = {
  entry: {
    app: './src/index.js',
  },
  output: {
    filename: '[name].js',
    path: 'dist'
  },
  module: {
    rules: [

    ]
  }
}