/**
*～╭════╮┌══════════════┐
* ╭╯开车║ ▁▂▃▅▆▇  |  ~~~
* ╰⊙═⊙╯╰══⊙══════⊙══╯
* @description: 22. 括号生成 
* @author: PresByter
* @date  : 2020/02/22 11:03:53
* @file  : 22.ts
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
 * @param left 剩余的左括号的个数
 * @param right 剩余的右括号的个数
 */
const generateOneByOne = (sublist: string, result: string[], left: number, right: number): void => {
  if (left === 0 && right === 0) { //当左括号 和 右括号 没有剩余的时候，把生成的结果 放入结果列表中
    result.push(sublist)
    return
  }
  if (left > 0) { //当 左括号 有剩余的时候，生成的字符串结果 加 （ ，并且数量减1
    generateOneByOne(sublist + '(', result, left - 1, right)
  }
  if (right > left) { // 当右括号 大于左括号的时候，生成的字符串结果 加 ) ，并且数量减1
    generateOneByOne(sublist + ')', result, left, right - 1)
  }
};

/**
 * @param {number} n
 * @return {string[]}
 */
const generateParenthesis = (n: number): string[] => {
  if (n === 0) return []
  if (n === 1) return ["()"]
  let res: string[] = []
  generateOneByOne("", res, n, n)
  return res
};
console.log(generateParenthesis(3));