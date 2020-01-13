// 是一个独立的模块文件
// 每一个模块（文件）都有自己的独立的作用域
// require(模块的id/模块的路径)
// 规范 commonJs

const a = 111;
// console.log (a);

// 2 里面的 a没有影响1中的a

// global 把一个内部数据挂载到全局对象的下面
// 不推荐，会污染全局变量
global.a1 = 'a1';

const aaa = require ('./module2.js');

// console.log (a, aaa);

/**
 * 模块导出
 * exports 的对象下面
 */
// exports.a1='a1a1'

// console.log(module)

// const a2 = require('./module3.js') // module.require
// console.log(a2)

// const a2 = require('./file/file.js') //
const a2 = require ('./file'); // module.require
// console.log (a2);

// let m2 = require ('./node_modules/m2');
let m2 = require ('m2');

// console.log (m2);

const fs = require ('fs');
// console.log (fs);

// import {file1} from './file';
// import * as flies from './file'
// console.log (file1);
// export const file1 = 'file1';
// 只能有一个default
// export default const file1 = 'file1';

