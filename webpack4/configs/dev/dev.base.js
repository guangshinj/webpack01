const path = require('path');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const baseConfig = require('../common');


const config = {
  mode: 'development', // development 或 production
  devtool: 'source-map',
  entry: './src/js-dom/index.js',
  output: {
    filename: '[name].js', // entry是一个object，key作为动态名字命名输出的js文件名
    path: path.resolve('dist') // 这里要求绝对目录，所以用path.resovle;另外，以package.json的位置为根
  },
  module: {
    rules: [
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: '菜鸟保护伞', // 无法覆盖模板的title
      template: 'public/index.html', // 这里以package.json的位置为根
      filename: 'index.htm',
      inject: 'body',
      scriptLoading: 'defer',
      favicon: 'public/images/logo.ico',
      meta: { viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no' },
      // base: 'http://localhost:8080/index.htm',
      minify: false,
      hash: true,
      cache: true,
    })
  ]
}
const merged = merge(baseConfig, config)
// console.info(merged)

module.exports = merged