/**
*～╭════╮┌══════════════┐
* ╭╯开车║ ▁▂▃▅▆▇  |  ~~~
* ╰⊙═⊙╯╰══⊙══════⊙══╯
* @description:  69. x 的平方根
* @author: PresByter
* @date  : 2020/03/03 14:33:32
* @file  : 69.ts
*/
/**
 * 69. x 的平方根
 * 
 * https://leetcode-cn.com/problems/sqrtx/
 * 
实现 int sqrt(int x) 函数。

计算并返回 x 的平方根，其中 x 是非负整数。

由于返回类型是整数，结果只保留整数的部分，小数部分将被舍去。

示例 1:

输入: 4
输出: 2
示例 2:

输入: 8
输出: 2
说明: 8 的平方根是 2.82842..., 
     由于返回类型是整数，小数部分将被舍去。
 */
/**
 * @param {number} x
 * @return {number}
 */
const mySqrt = (x: number): number => {
    if (x < 2) return x
    let l = 0, r = x, res = 0
    while (l <= r) {
        let m = (l + r) / 2
        // 这里 没有用乘 ，是因为当m很大的时候，会越界，也就是负数
        if (m === x / m) {
            res = m
        } else if (m < x / m) {
            l = m + 1
            res = m
        } else {
            r = m - 1
            res = m
        }
    }
    return Math.floor(res)
};
// console.log(mySqrt(8));
// 牛顿迭代法
const mySqrt1 = (x: number): number => {
    if (x < 2) return x
    let r = x
    while (r > x / r) {
        r = (r + x / r) / 2
    }
    return parseInt(r + '')
};
console.log(mySqrt1(8));
const a = { c: 55, 'a4': 44 }
 a.c=999
console.log(a);
