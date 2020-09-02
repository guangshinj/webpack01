const path = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const baseConfig = require('../webpack.base')

const config = {
  mode: 'development', // development 或 production
  output: {
    filename: '[name].js', // entry是一个object，key作为动态名字命名输出的js文件名
    path: path.resolve('public') // 这里要求绝对目录，所以用path.resovle;另外，以package.json的位置为根
  },
  plugins: [
    new HtmlWebpackPlugin({ template: 'public/index.html' }) // 这里以package.json的位置为根
  ]
}
const merged = merge(baseConfig, config)
console.info(merged)

module.exports = merged