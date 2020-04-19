/**
 * 1、先定义函数或者变量 最后一起导出
 */
let flag = true
let sum = function(num1, num2) {
	return num1 + num2;
}

// export {flag, sum}

/*2、直接导出变量*/
// export var name = 'Ant'

/*3、export default */

export default {sum, flag}