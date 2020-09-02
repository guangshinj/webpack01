# packages

webpack-merge 提供 merge 函数合并配置对象

# plugins

# loaders

## 文件 loader

raw-loader utf-8 编码方式加载文件原始内容
val-loader 将代码作为模块执行，并将 exports 转化为 js 代码
file-loader 将文件发送到输出文件夹，并返回相对 URL
url-loader 类似 file-loader，但如果文件小于限制，可返回 data URL

## JSON loader

json-loader 加载 JSON 文件
json5-loader 加载和转译 JSON5 文件
cson-loader 加载和转译 CSON 文件

## 转换和编译（transpiling） loader

babel-loader 加载 ES2015+的 js 代码，并使用 babel 转化成 es5
ts-loader 像 js 一样加载 typescript2.0+
script-loader 在全局上下文执行一次 js（比如 script 标签），不需要解析
buble-loader 加载 ES2015+的 js 代码，并使用 buble 转化成 es5
traceur-loader 加载 ES2015+的 js 代码，并使用 traceur 转化成 es5
awesome-typescript-loader 像 js 一样加载 typescript2.0+
coffee-loader 像 js 一样加载 coffeescript

## 模板（templating） loader

html-loader 导出 HTML 为字符串，需要引入静态资源
pug-loader 加载 Pug 模板，并返回一个函数
jade-loader 加载 Jade 模板，并返回一个函数
markdown-loader 将 Markdown 转译为 HTML
react-markdown-loader 使用 markdown parse 解析器将 Markdown 编译为 react 组件
posthtml-loader 使用 Posthtml 加载并转换 HTML 文件
handlebars-loader 将 handlebars 转译为 HTML
markup-inline-loader 将 SVG/MathML 文件转化为 HTML。在应用图标字体，或将 CSS 动画应用于 SVG 时非常有用

## 样式 loader

style-loader 将模块的导出作为样式添加到 DOM 中
css-loader 解析 css 文件后，使用 import 加载，并返回 css 代码
less-loader 加载和转义 Less 文件
sass-loader 加载和转义 Sass/Scss 文件
postcss-loader 使用 PostCSS 加载和转义 CSS/SSS 文件
stylus-loader 加载和转义 Stylus 文件

## 清理和测试（Linting && Testing） loader

eslint-loader PreLoader,使用 Eslint 清理代码
mocha-loader 使用 Mocha 测试，支持浏览器和 Node
jshint-loader PreLoader,使用 Jshint 清理代码
jscs-loader PreLoader,使用 JSCS 检查代码样式
coverjs-loader PreLoader,使用 CoverJS 检查测试覆盖率

## 框架（Frameworks） loader

vue-loader 加载和转译 vue 文件
polymer-loader 使用选择预处理器处理，并且 require（）类似一等模块 Web 组件
angular2-template-loader 加载和转译 Angular 文件
