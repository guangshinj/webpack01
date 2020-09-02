export class HelloAsyncPlugin {
  apply(compiler) {
    compiler.plugin('emit', function (compilation, callback) {
      setTimeout(() => {
        console.log("Done with async work...");
        callback();
      }, 1000)
    })
  }
}