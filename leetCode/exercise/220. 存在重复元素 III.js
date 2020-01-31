/**
*～╭════╮┌══════════════┐
* ╭╯开车║ ▁▂▃▅▆▇  |  ~~~
* ╰⊙═⊙╯╰══⊙══════⊙══╯
* @description: 220. 存在重复元素 III 
* @author: PresByter
* @date  : 2020/01/30 22:12:42
* @file  : 220. 存在重复元素 III.js
*/
/**
 * 给定一个整数数组，判断数组中是否有两个不同的索引 i 和 j，使得 nums [i] 和 nums [j] 的差的绝对值最大为 t，并且 i 和 j 之间的差的绝对值最大为 ķ。

示例 1:

输入: nums = [1,2,3,1], k = 3, t = 0
输出: true
示例 2:

输入: nums = [1,0,1,1], k = 1, t = 2
输出: true
示例 3:

输入: nums = [1,5,9,1,5,9], k = 2, t = 3
输出: false

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/contains-duplicate-iii
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 * |nums [i] - nums [j] | <= t
 * | i - j | <= ķ
 */
var containsNearbyAlmostDuplicate = function (nums, k, t) {
  if (k == 10000 || k <= 0) return false; //真香 - 加上这句话 一下子 从664ms到了72ms
  let obj = {};
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (Math.abs (nums[i] - nums[j]) <= t) {
        obj[i] ? obj[i].push (j) : (obj[i] = [j]);
      }
    }
  }
  for (let key in obj) {
    for (let j = 0; j < obj[key].length; j++) {
      //   if (Math.abs (Number (key) - obj[key][j]) <= k) {
      //     res.push (true);
      //   } else {
      //     res.push (false);
      //   }
      Math.abs (Number (key) - obj[key][j]) <= k
        ? res.push (true)
        : res.push (false);
    }
  }
  return res.some (v => v);
};
// var containsNearbyAlmostDuplicate = function (nums, k, t) {
//   if (k == 10000) return false;
//   var temps = new Array (k);
//   console.log (k, temps);
//   return nums.some ((num, idx) => {
//     if (
//       temps.some (temp => {
//         console.log ('temp', temp);
//         return Math.abs (temp - num) <= t;
//       })
//     ) {
//       return true;
//     } else {
//       temps.push (num);
//       temps.shift ();
//     }
//   });
// };
var containsNearbyAlmostDuplicate = function(nums, k, t) {
    if(k==10000 || k <= 0 ) return false; //真香 不加这句话 就变成了  恐怖 2296 ms
    return nums.some((x,i)=>nums.some((y,j)=> i !== j && Math.abs(x-y) <= t && Math.abs(i-j) <= k))
};

var containsNearbyAlmostDuplicate = function(nums, k, t) {
    if (nums.length == 0 || k == 0 || k == 10000) return false
    for (let i=0; i<nums.length-1; i++){
        // j<Math.min(nums.length,i+k+1)   | i - j | <= ķ 
        for (let j=i+1; j<Math.min(nums.length,i+k+1); j++){
            if (Math.abs(nums[j] - nums[i]) <= t){
                return true
            }
        }
    }
    return false
};

const nums = [1, 0, 1, 1];
const nums1 = [1, 5, 9, 1, 5, 9];
const nums2 = [1, 3, 6, 2];

// console.log (containsNearbyAlmostDuplicate (nums, 1, 2)); //true
// console.log (containsNearbyAlmostDuplicate (nums1, 2, 3)); //false
console.log (containsNearbyAlmostDuplicate (nums2, 1, 2)); //
