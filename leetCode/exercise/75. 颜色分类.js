/**
*～╭════╮┌══════════════┐
* ╭╯开车║ ▁▂▃▅▆▇  |  ~~~
* ╰⊙═⊙╯╰══⊙══════⊙══╯
* @description: 75. 颜色分类 
* @author: PresByter
* @date  : 2020/01/29 16:06:25
* @file  : 75. 颜色分类.js
*/
/**
 * 给定一个包含红色、白色和蓝色，一共 n 个元素的数组，原地对它们进行排序，使得相同颜色的元素相邻，并按照红色、白色、蓝色顺序排列。

此题中，我们使用整数 0、 1 和 2 分别表示红色、白色和蓝色。

注意:
不能使用代码库中的排序函数来解决这道题。

示例:

输入: [2,0,2,1,1,0]
输出: [0,0,1,1,2,2]

 */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// TODO:这里不让直接返回值
var sortColors = function (nums) {
  let obj = {};
  let res = [];
  nums.forEach (v => {
    obj[v] ? obj[v]++ : (obj[v] = 1);
  });
  for (k in obj) {
    res.push (...Array.from ({length: obj[k]}, () => +k));
  }
  nums.forEach ((v, index) => {
    nums[index] = res[index];
  });
  //   return res;
  //   nums[0] = [222];
  //   return nums  => 222
};
const data = [2, 0, 2, 1, 1, 0];
// console.log (sortColors (data));
sortColors (data);
console.log (data);

// https://leetcode-cn.com/problems/sort-colors/solution/75-yan-se-fen-lei-by-alexer-660/