/**
*～╭════╮┌══════════════┐
* ╭╯开车║ ▁▂▃▅▆▇  |  ~~~
* ╰⊙═⊙╯╰══⊙══════⊙══╯
* @description: 922. 按奇偶排序数组 II 
* @author: PresByter
* @date  : 2020/01/25 23:12:19
* @file  : 8.js
*/
/**
 * 给定一个非负整数数组 A， A 中一半整数是奇数，一半整数是偶数。

对数组进行排序，以便当 A[i] 为奇数时，i 也是奇数；当 A[i] 为偶数时， i 也是偶数。

你可以返回任何满足上述条件的数组作为答案。

 

示例：

输入：[4,2,5,7]
输出：[4,5,2,7]
解释：[4,7,2,5]，[2,5,4,7]，[2,7,4,5] 也会被接受。

 */
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function (A) {
  let j = [];
  let o = [];
  let res = [];
  A.forEach ((v, idx) => {
    // console.log (v % 2, v);
    if (v % 2 === 0) {
      o.push (v);
    } else {
      j.push (v);
    }
  });
  for (let i = 0; i < A.length; i++) {
    if (i % 2 === 0) {
      res[i] = o.pop ();
    } else {
      res[i] = j.pop ();
    }
  }
  return res;
};

const A = [4, 2, 5, 7];
const res = sortArrayByParityII (A);
console.log (res);

/**
 * 解法一：新开一个数组，遍历原数组，偶数放偶数位，奇数放奇数位
解法二：不开新数组，找到为偶数的奇数位，和为奇数的偶数位，交换
 */
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function (A) {
  let r = [];
  let odd = 1;
  let even = 0;
  A.forEach (item => {
    if (item % 2 === 1) {
      r[odd] = item;
      odd += 2;
    } else {
      r[even] = item;
      even += 2;
    }
  });
  return r;
};

/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function (A) {
  let odd = 1;
  let even = 0;
  const len = A.length;
  // 只要有一个遍历完就可以了
  while (odd < len && even < len) {
    // 找到奇指针对应的数不为奇数的地方
    while (odd < len && A[odd] % 2 === 0) {
      odd += 2;
    }
    // 找到偶数针对应的数不为偶数的地方
    while (even < len && A[even] % 2 === 1) {
      even += 2;
    }
    // 交换
    if (odd < len && even < len) {
      [A[odd], A[event]] = [A[event], A[odd]];
    }
  }
};
