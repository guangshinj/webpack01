## mode

development 模式： 自动使用 webpack 的 NamedModulesPlugin 插件，并且通过 DefinePlugin 修改 process.env.NODE_ENV 为"development"
production 模式： 自动使用 UglifyJsPlugin、 webpack.optimize 的 ModuleConcatenationPlugin、 webpack 的 NoEmitOnErrorsPlugin 插件，并且通过 DefinePlugin 修改 process.env.NODE_ENV 为"production"
