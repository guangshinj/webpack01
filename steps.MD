# webpack4 用到的包

npm install --save-dev webpack
npm install --save-dev webpack-cli

npm i webpack-merge -D
npm i html-webpack-plugin -D
npm i typescript ts-loader -D
npm install style-loader css-loader -D

npm install --save-dev memory-fs

## loader-utils 提供了许多有用的工具，但最常用的一种工具是获取传递给 loader 的选项,schema-utils 包配合 loader-utils，用于保证 loader 选项，进行与 JSON Schema 结构一致的校验

npm install --save-dev loader-utils schema-utils
npm install --save-dev jest babel-jest babel-preset-env
npm install --save @babel/polyfill

# plugins

CommonsChunkPlugin 从「应用程序 bundle」中提取 vendor 引用到 vendor bundle, 并把引用 vendor 的部分替换为 `__webpack_require__()` 调用
NamedChunksPlugin
NamedModulesPlugin
FlagDependencyUsagePlugin
FlagIncludedChunksPlugin
ModuleConcatenationPlugin
NoEmitOnErrorsPlugin
OccurrenceOrderPlugin
SideEffectsFlagPlugin
UglifyJsPlugin
html-webpack-plugin

# loader(支持链式传递,可对资源使用流水线；可同步或异步；运行在 node 环境；接收入参和 options 参数；可以作为一个独立的 npm 模块；可产生额外的文件)
