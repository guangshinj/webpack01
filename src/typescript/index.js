import { add, sub } from 'ts-loader!./calculate.ts' // 内联调用ts-loader处理ts源代码
console.info('1+2=', add(1, 2))
console.info('5-1=', sub(5, 1))