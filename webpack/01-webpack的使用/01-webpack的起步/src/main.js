//1、使用commonjs的模块化规范
import {add, mul} from './mathUtil.js'

console.log(add(10, 20));
console.log(mul(30, 40));

//2、使用es6的模块化导出
import {name, age, height} from './info'

console.log(name);
console.log(age);
console.log(height);


