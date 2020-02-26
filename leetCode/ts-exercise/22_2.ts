/**
*～╭════╮┌══════════════┐
* ╭╯开车║ ▁▂▃▅▆▇  |  ~~~
* ╰⊙═⊙╯╰══⊙══════⊙══╯
* @description: 22. 括号生成  
* @author: PresByter
* @date  : 2020/02/27 00:01:49
* @file  : 22_2.ts
*/
/**
 * 22. 括号生成
 * https://leetcode-cn.com/problems/generate-parentheses/
 * 
给出 n 代表生成括号的对数，请你写出一个函数，使其能够生成所有可能的并且有效的括号组合。

例如，给出 n = 3，生成结果为：

[
  "((()))",
  "(()())",
  "(())()",
  "()(())",
  "()()()"
]
 */

/**
 * 
 * @param sublist 结果 字符串
 * @param result 结果 数组
 * @param left 左括号的个数
 * @param right 右括号的个数
 * @param n 有多少对括号数
 */
const generateOneByOne2 = (sublist: string, result: string[], left: number, right: number, n: number): void => {
    if (left === n && right === n) { //当左括号 和 右括号 用完的时候，把生成的结果 放入结果列表中
        result.push(sublist)
        return
    }
    if (left < n) { //当 左括号 还有有时候，生成的字符串结果 加 （ ，并且数量加 1
        generateOneByOne2(sublist + '(', result, left + 1, right, n)
    }
    if (right < left && right < n) { // 当右括号 还有有时候，生成的字符串结果 加 ) ，并且数量加1
        generateOneByOne2(sublist + ')', result, left, right + 1, n)
    }
};

/**
 * @param {number} n
 * @return {string[]}
 */
const generateParenthesis2 = (n: number): string[] => {
    if (n === 0) return []
    if (n === 1) return ["()"]
    let res: string[] = []
    generateOneByOne2("", res, 0, 0, n)
    return res
};
console.log(generateParenthesis2(3));