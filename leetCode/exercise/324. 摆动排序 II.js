/**
*～╭════╮┌══════════════┐
* ╭╯开车║ ▁▂▃▅▆▇  |  ~~~
* ╰⊙═⊙╯╰══⊙══════⊙══╯
* @description: 324. 摆动排序 II 
* @author: PresByter
* @date  : 2020/02/05 14:06:56
* @file  : 324. 摆动排序 II.js
*/
/**
 * 给定一个无序的数组 nums，将它重新排列成 nums[0] < nums[1] > nums[2] < nums[3]... 的顺序。

示例 1:

输入: nums = [1, 5, 1, 1, 6, 4]
输出: 一个可能的答案是 [1, 4, 1, 5, 1, 6]
示例 2:

输入: nums = [1, 3, 2, 2, 3, 1]
输出: 一个可能的答案是 [2, 3, 1, 3, 1, 2]
说明:
你可以假设所有输入都会得到有效的结果。

 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var wiggleSort = function (nums) {
  if (nums.length <= 1) return nums;
  const rnums = nums.sort ();
  const len = nums.length;
  const halfs = Math.ceil (len / 2);
  const res = [];
  const fnums = rnums.slice (0, halfs);
  const bnums = rnums.slice (halfs, len);
  //   console.log (halfs, len, rnums);
  //   console.log (rnums.slice (0, halfs));
  //   console.log (rnums.slice (halfs, len));
  // i <= halfs-1 ? res.push (fnums[i], bnums[i]) : res.push (fnums[i]);
  for (let i = 0; i < halfs; i++) {
    res.push (fnums[i], bnums[i]);
  }
  return res.filter (v => v);
};
// console.log (wiggleSort ([1, 5, 1, 1, 6, 4, 2]));
// console.log (wiggleSort ([1, 3, 2, 2, 3, 1]));
console.log (wiggleSort ([1, 5, 1, 1, 6, 4]));
// TODO:不知道为什么 LeetCode 就是输出的结果不对