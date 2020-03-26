/**
*～╭════╮┌══════════════┐
* ╭╯开车║ ▁▂▃▅▆▇  |  ~~~
* ╰⊙═⊙╯╰══⊙══════⊙══╯
* @description:  1. 两数之和
* @author: PresByter
* @date  : 2020/03/26 10:17:11
* @file  : 1.ts
*/
/**
 * 1. 两数之和
 * 
 * https://leetcode-cn.com/problems/two-sum/
 * 
给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。

你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。

示例:

给定 nums = [2, 7, 11, 15], target = 9

因为 nums[0] + nums[1] = 2 + 7 = 9
所以返回 [0, 1]
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums: number[], target: number): number[] => {
    let res: number[] = []
    for (let i = 0; i < nums.length; i++) {
        let targetIndex = nums.indexOf(target - nums[i]);
        if ((targetIndex !== -1) && (targetIndex !== i)) {
            // console.log('index', i, nums.indexOf(target - nums[i]));
            res = [i, nums.indexOf(target - nums[i])]
            break
        }
    }
    return res.sort()
};
const nums = [3, 7, 2, 4], target = 6
console.log(twoSum(nums, target));
