function FileListPlugin() { }
FileListPlugin.prototype.apply = function (compiler) {
  compiler.plugin("emit", function (compilation, callback) {
    // 在生成文件中，创建一个头部字符串：
    var filelist = 'In this build:\n\n';
    for (var filename in compilation.assets) {
      filelist += ('- ' + filename + '\n');
    }

    compilation.assets['filelist.md'] = {
      source: function () {
        return filelist
      },
      size: function () {
        return filelist.length
      }
    }

    callback()
  })
}