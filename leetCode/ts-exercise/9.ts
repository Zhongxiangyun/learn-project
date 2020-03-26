/**
*～╭════╮┌══════════════┐
* ╭╯开车║ ▁▂▃▅▆▇  |  ~~~
* ╰⊙═⊙╯╰══⊙══════⊙══╯
* @description: 9. 回文数 
* @author: PresByter
* @date  : 2020/03/26 16:48:11
* @file  : 9.ts
*/
/**
 * 9. 回文数
 * 
 * https://leetcode-cn.com/problems/palindrome-number/
 * 
判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。

示例 1:

输入: 121
输出: true
示例 2:

输入: -121
输出: false
解释: 从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。
示例 3:

输入: 10
输出: false
解释: 从右向左读, 为 01 。因此它不是一个回文数。
TODO:不能使用字符串 进行反转
 */
/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = (x: number): boolean => {
    if (x < 0) return false
    let res: number = 0
    let org: number = x
    while (org > 0) {
        // console.log(org);
        // if (Math.floor((org / 10)) > 0) {
        //     res = (res + org % 10) * 10
        // } else {
        // res = (res + org % 10)
        // }
        res = (res * 10 + org % 10)
        org = org / 10 | 0
    }
    return res === x
};
console.log(isPalindrome(1003001));
