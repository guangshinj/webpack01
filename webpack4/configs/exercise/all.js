const { merge } = require('webpack-merge');
const loaderConfig = require('./loaders');
const cssConfig = require('./css');

const config = {
  entry: './src/index.js',
}
module.exports = merge(cssConfig, loaderConfig, config)