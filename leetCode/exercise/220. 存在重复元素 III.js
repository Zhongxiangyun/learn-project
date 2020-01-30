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
 * |nums [i] - nums [j] | = t
 * | i - j |= ķ
 */
var containsNearbyAlmostDuplicate = function (nums, k, t) {
  nums.forEach ((v, i) => {
    // console.log (Math.abs(t - v), i);
    let per = Math.abs (t - v);
    // console.log(nums.findIndex(v=>v===per));
    let indexs = nums.filter ((v2,i2)=>{
        if(v2===per) return i2 
    });
    console.log (indexs);
  });
  // if(){}
};

const nums = [1, 0, 1, 1];
const nums1 = [1, 5, 9, 1, 5, 9];

console.log (containsNearbyAlmostDuplicate (nums, 1, 2));
console.log (containsNearbyAlmostDuplicate (nums1, 2, 3));
