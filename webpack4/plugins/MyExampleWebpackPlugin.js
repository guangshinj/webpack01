// 一个 JavaScript 命名函数。
function MyExampleWebpackPlugin() {

};

MyExampleWebpackPlugin.prototype.apply = function (compiler) {
  compiler.plugin('done', function (compilation/* 处理 webpack 内部实例的特定数据。*/) {
    console.info('This is an example plugin, done!!!')
  })
}
module.exports = MyExampleWebpackPlugin