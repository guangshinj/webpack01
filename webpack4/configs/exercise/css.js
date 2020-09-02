const { merge } = require('webpack-merge');
const baseConfig = require('../dev/dev.base');

const config = {
  entry: './src/css/index.js',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
            options: {
            }
          },
          {
            loader: 'css-loader'
          }
        ]
      },
      {
        test: /\.styl$/,
        use: ['style-loader', 'css-loader', "stylus-loader"]
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader',
            options: {
            }
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'less-loader'
          }
        ]
      }
    ]
  }
}
module.exports = merge(baseConfig, config)