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
const isPowerOfTwo1 = (n: number): boolean => {
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

const isPowerOfTwo2 = (n: number): boolean => {
    return typeof Math.log2(n) === 'number' && Math.log2(n) % 1 === 0
};
const isPowerOfTwo = (n: number): boolean => {
    // 位运算  X = X & (X-1) => 清零最低位的1 (2的幂 满足有一个1且仅有一个1，即：00000100000,000010,)
    // 011 -> 3
    // &
    // 010 -> 3-1
    // 010 -> 2  不为0 不是2的幂数
    // -------------------
    // 010 -> 2
    // &
    // 001 -> 2-1
    // 000 -> 0  为0 是2的幂数
    // -------------------
    if (n <= 0) {
        return false
    }
    return (n !== 0) && ((n & (n - 1)) === 0)
};

console.log(isPowerOfTwo(1));
console.log(isPowerOfTwo(16));
console.log(isPowerOfTwo(218));
