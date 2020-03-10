/**
*～╭════╮┌══════════════┐
* ╭╯开车║ ▁▂▃▅▆▇  |  ~~~
* ╰⊙═⊙╯╰══⊙══════⊙══╯
* @description: 191. 位1的个数 
* @author: PresByter
* @date  : 2020/03/10 15:10:45
* @file  : 191.ts
*/
/**
 * 191. 位1的个数
 * https://leetcode-cn.com/problems/number-of-1-bits/
 * 
编写一个函数，输入是一个无符号整数，返回其二进制表达式中数字位数为 ‘1’ 的个数（也被称为汉明重量）。

示例 1：

输入：00000000000000000000000000001011
输出：3
解释：输入的二进制串 00000000000000000000000000001011 中，共有三位为 '1'。
示例 2：

输入：00000000000000000000000010000000
输出：1
解释：输入的二进制串 00000000000000000000000010000000 中，共有一位为 '1'。
示例 3：

输入：11111111111111111111111111111101
输出：31
解释：输入的二进制串 11111111111111111111111111111101 中，共有 31 位为 '1'。
 */

/**
* @param {number} n - a positive integer
* @return {number}
*/
const hammingWeight = (n: number): number=> {
    let count = 0
    let m = n
    // let len = n.toString(2).length
    console.log(n.toString(2));
    // for (let i = 0; i < n.toString(2).length; i++) {
    //     if (m[i] === '1') {
    //         count++
    //     }
    // }
    // while (len > 0) {
    //     if (m % 2 === 1) {
    //         console.log(count, m>>1, n);
    //         count++
    //         m = m >> 1
    //     }
    //     len--
    // }
    while (m !== 0) {
        count++
        m = m & (m - 1)
    }
    // console.log(count);
    return count
};
hammingWeight(0b00000000000000000000000000001011)
hammingWeight(0b11111111111111111111111111111101)