/**
* @description:  面试
* @author: PresByter
* @date  : 2020/02/06 15:38:08
* @file  : i1.js
*/
/**
 * 3. 编程：给出⼀个整数n，请你写⼀个程序输出它的汉字形式。约定0<n<10^12。例如 
n=123456则输出⼗⼆万三千四百五⼗六。
*  5987,1461,2345
*  5千9百亿
 */

/**
 * @param {number} num
 * @return {string} 
 */

//将数字（整数）转为汉字，从零到一亿亿，需要小数的可自行截取小数点后面的数字直接替换对应words的读法就行了
const numTransferWord = num => {
  if (num <= 0 || num > Math.pow (10, 12)) {
    throw Error ('该数值超出界限');
    return;
  }
  const words = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九'];
  const units = [
    '',
    '十',
    '百',
    '千',
    '万',
    '十',
    '百',
    '千',
    '亿',
    '十',
    '百',
    '千',
    '万',
    '十',
    '百',
    '千',
    '亿',
  ]; //可继续追加更高位转换值
  if (!num || isNaN (num)) {
    return '零';
  }
  let english = Array.from (String (num));
  let result = '';
  for (let i = 0; i < english.length; i++) {
    let des_i = english.length - 1 - i; //倒序排列设值
    result = units[i] + result;
    let words_index = english[des_i];
    result = words[words_index] + result;
  }
  //将【零千、零百】换成【零】 【十零】换成【十】
  result = result.replace (/零(千|百|十)/g, '零').replace (/十零/g, '十'); //合并中间多个零为一个零
  result = result.replace (/零+/g, '零'); //将【零亿】换成【亿】【零万】换成【万】
  result = result.replace (/零亿/g, '亿').replace (/零万/g, '万'); //将【亿万】换成【亿】
  result = result.replace (/亿万/g, '亿'); //移除末尾的零
  result = result.replace (/零+$/, '');
  //将【零一十】换成【零十】
  //result = result.replace(/零一十/g, '零十');
  //貌似正规读法是零一十 //将【一十】换成【十】
  result = result.replace (/^一十/g, '十');
  return result;
};
// console.log (numTransferWord (78456656200));
console.log (numTransferWord (123456000002));
// console.log (numTransferWord (212345601));
// console.log (numTransferWord (656201));
