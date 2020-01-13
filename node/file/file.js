module.exports.a = '我是 filejs';
const val = require ('./index');
exports.val = val;

let m2 = require ('m2');
console.log ('file文件夹', m2);

export const file1 = 'file1';
