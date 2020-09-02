import path from 'path';
import webpack from 'webpack';
import memoryfs from 'memory-fs';
import { HelloAsyncPlugin } from '../../webpack/plugin/HelloAsyncPlugin';
import { MyPlugin } from '../../webpack/plugin/MyPlugin';
const MyExampleWebpackPlugin = require('../../webpack/plugin/MyExampleWebpackPlugin')

export default (fixture, options = {}) => {
  const compile = webpack({
    context: __dirname,
    entry: './' + fixture,
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname)
    },
    module: {
      rules: [
        {
          test: /\.txt$/,
          use: [
            {
              loader: path.resolve(__dirname, '../../webpack/loader/replaceName.js'),
              options: {
                name: 'Alice'
              }
            }
          ]
        }
      ]
    },
    plugins: [
      new MyExampleWebpackPlugin({ options: true }),
      new HelloAsyncPlugin({ options: true }),
      new MyPlugin({ options: true }),
    ]
  })
  compile.outputFileSystem = new memoryfs()
  return new Promise((resolve, reject) => {
    compile.run((err, stats) => {
      console.info('compiler.js stats=>')
      if (err) {
        reject(err)
      } else {
        resolve(stats)
      }
    })
  })
}