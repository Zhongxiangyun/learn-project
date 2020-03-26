/**
*～╭════╮┌══════════════┐
* ╭╯开车║ ▁▂▃▅▆▇  |  ~~~
* ╰⊙═⊙╯╰══⊙══════⊙══╯
* @description: 7. 整数反转 
* @author: PresByter
* @date  : 2020/03/26 16:23:25
* @file  : 7.ts
*/
/**
 * 7. 整数反转
 * 
 * https://leetcode-cn.com/problems/reverse-integer/
 * 
给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。

示例 1:

输入: 123
输出: 321
 示例 2:

输入: -123
输出: -321
示例 3:

输入: 120
输出: 21
 */
/**
 * @param {number} x
 * @return {number}
 */
const reverse = (x: number): number => {
    const maxBoarder: number = Math.pow(2, 31) - 1
    const minBoarder: number = -1 * Math.pow(2, 31)

    let res: string = ''
    if (x > 0) {
        res = x.toString().split('').reverse().join('')
    } else {
        res = (-x).toString().split('').reverse().join('')
    }
    if (x > 0 && (+res) > maxBoarder) return 0
    if (x < 0 && (+res * -1) < minBoarder) return 0
    return x > 0 ? +res : (+res) * (-1)
};
console.log(reverse(-2147483648));
console.log(reverse(1534236469));
