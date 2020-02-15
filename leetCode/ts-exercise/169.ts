/**
*～╭════╮┌══════════════┐
* ╭╯开车║ ▁▂▃▅▆▇  |  ~~~
* ╰⊙═⊙╯╰══⊙══════⊙══╯
* @description: 169. 多数元素 
* @author: PresByter
* @date  : 2020/02/15 17:55:06
* @file  : 169.ts
*/
/**
 * 给定一个大小为 n 的数组，找到其中的多数元素。多数元素是指在数组中出现次数大于 ⌊ n/2 ⌋ 的元素。

你可以假设数组是非空的，并且给定的数组总是存在多数元素。

示例 1:

输入: [3,2,3]
输出: 3
示例 2:

输入: [2,2,1,1,1,2,2]
输出: 2

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/majority-element
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
interface anyObj {
    attribute?: number
}
const majorityElement = (nums: number[]): number => {
    let obj: anyObj = {}
    let res: number = 0
    for (let i: number = 0; i < nums.length; i++) {
        obj[nums[i]] ? obj[nums[i]]++ : obj[nums[i]] = 1
    }
    let max: number = 0
    for (let k in obj) {
        if (max <= obj[k]) {
            max = obj[k]
            res = Number(k)
        }
    }
    // console.log(max);

    return res
};
console.log(majorityElement([3, 2, 3]));
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
