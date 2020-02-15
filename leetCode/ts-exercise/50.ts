/**
*～╭════╮┌══════════════┐
* ╭╯开车║ ▁▂▃▅▆▇  |  ~~~
* ╰⊙═⊙╯╰══⊙══════⊙══╯
* @description: 50. Pow(x, n) 
* @author: PresByter
* @date  : 2020/02/15 16:48:39
* @file  : 50.ts
*/
/**
 * 实现 pow(x, n) ，即计算 x 的 n 次幂函数。

示例 1:

输入: 2.00000, 10
输出: 1024.00000
示例 2:

输入: 2.10000, 3
输出: 9.26100
示例 3:

输入: 2.00000, -2
输出: 0.25000
解释: 2-2 = 1/22 = 1/4 = 0.25
说明:

-100.0 < x < 100.0
n 是 32 位有符号整数，其数值范围是 [−231, 231 − 1] 。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/powx-n
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
/*
1:直接调库函数，Math.pow()   **  o(1)
2、暴力 一个个的去乘 o(n)
3、分治 从中间分开
    偶：y=x^(Math.floor(n/2))  res=y*y
    奇：y=x^(Math.floor(n/2))  res=y*y*x
*/
const myPow0 = (x: number, n: number): number => {
    if (x <= -100 || x >= 100) { return 0 }
    // return Math.pow(x,n)
    return x ** n
};
const myPow1 = (x: number, n: number): number => {
    if (x <= -100 || x >= 100) { return 0 }
    if (n === 0) return 1
    let res: number = 1
    for (let i = 0; i < Math.abs(n); i++) {
        res = res * x
    }
    return n > 0 ? res : 1 / res
};
const myPow2 = (x: number, n: number): number => {
    if (x <= -100 || x >= 100) { return 0 }
    if (n === 0) return 1
    if (n < 0) return 1 / myPow2(x, -n)
    if (n % 2) return x * myPow2(x, n - 1)
    return myPow2(x * x, n / 2)
};
const myPow = (x: number, n: number): number => {
    // if (x <= -100 || x >= 100) { return 0 }
    if (n === 0) return 1
    if (n < 0) {
        x = 1 / x
        n = -n
    }
    let pow: number = 1
    while (n) {
        // n 为奇数 =>1
        // n 为偶数 =>0
        if (n & 1) {
            pow *= 1
        }
        x *= x
        n >>>= 1
    }
    return pow
};
console.log(myPow(2, 10));
console.log(myPow(2, -2147483648));
