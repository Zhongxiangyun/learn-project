/**
*～╭════╮┌══════════════┐
* ╭╯开车║ ▁▂▃▅▆▇  |  ~~~
* ╰⊙═⊙╯╰══⊙══════⊙══╯
* @description: 231. 2的幂 
* @author: PresByter
* @date  : 2020/03/10 16:54:33
* @file  : 231.ts
*/
/**
 * 231. 2的幂
 * 
 * https://leetcode-cn.com/problems/power-of-two/
 * 
给定一个整数，编写一个函数来判断它是否是 2 的幂次方。

示例 1:

输入: 1
输出: true
解释: 20 = 1
示例 2:

输入: 16
输出: true
解释: 24 = 16
示例 3:

输入: 218
输出: false
 */
/**
 * @param {number} n
 * @return {boolean}
 */
// TODO:LeetCode上超时
const isPowerOfTwo = (n: number): boolean => {
    let count = 0
    let m = n
    if (n === 0) {
        return false
    }
    while (m) {
        m = Math.floor(m / 2)
        count++
    }
    return Math.pow(2, (count - 1)) === n
};

console.log(isPowerOfTwo(1));
console.log(isPowerOfTwo(16));
console.log(isPowerOfTwo(218));
