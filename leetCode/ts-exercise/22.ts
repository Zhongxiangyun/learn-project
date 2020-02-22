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
 * @param {number} n
 * @return {string[]}
 */
const generateParenthesis = (n: number): string[] => {
    if (n === 0) return []
    if (n === 1) return ["()"]
};


