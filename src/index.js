import _ from 'lodash'; // 第三方工具库
import { add, sub } from 'ts-loader!./utils/calc.ts' // 内联调用ts-loader处理ts源代码
import './css/index.css'

console.info('begin')
function component() {
  var element = document.createElement('div');

  // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());
console.info(add(1, 2))