/**
*～╭════╮┌══════════════┐
* ╭╯开车║ ▁▂▃▅▆▇  |  ~~~
* ╰⊙═⊙╯╰══⊙══════⊙══╯
* @description: 179. 最大数 
* @author: PresByter
* @date  : 2020/01/30 20:35:37
* @file  : 179. 最大数.js
*/
/**
给定一组非负整数，重新排列它们的顺序使之组成一个最大的整数。

示例 1:

输入: [10,2]
输出: 210
示例 2:

输入: [3,30,34,5,9]
输出: 9534330
说明: 输出结果可能非常大，所以你需要返回一个字符串而不是整数。

 */
/**
 * @param {number[]} nums
 * @return {string}
 * 关键
    首先排序原数组
    直接在排序时，对比拼接降序的相邻两个元素后的两个值的大小
    大的排前面，如30和3
    330 > 303 => 3、30
 */

var largestNumber = function (nums) {
  nums.sort ((a, b) => {
    let aStr = a + '';
    let bStr = b + '';

    // console.log(b * Math.pow(10,aStr.length) + a);
    // console.log(a * Math.pow(10,bStr.length) + b);
    // 30,3 =>303   30*10+3  10 正好是 3的长度 的10的一次幂
    // 30,3 =>330   3*100+30    100 正好是 30的长度 的10的二次幂
    return (
      b * Math.pow (10, aStr.length) + a - (a * Math.pow (10, bStr.length) + b)
    );
  });
  return nums.join ('').replace (/^0+/, '')||'0';;
};
var largestNumber = function (nums) {
  return nums
    .map (v => v.toString ())
    .sort ((a, b) => {
      return b + a - (a + b);
    })
    .join ('')
    .replace (/^0+/, '')||'0';
};
/**
 * 当 [0,0]的时候，会出现 '00';
 * 所以要生成的结果不能是 0 开头
 */
// const data = [3, 30, 34, 5, 9];
const data = [0, 0];
console.log (largestNumber (data));
