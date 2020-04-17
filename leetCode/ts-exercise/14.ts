/**
*～╭════╮┌══════════════┐
* ╭╯开车║ ▁▂▃▅▆▇  |  ~~~
* ╰⊙═⊙╯╰══⊙══════⊙══╯
* @description:  14. 最长公共前缀
* @author: PresByter
* @date  : 2020/04/17 11:52:30
* @file  : 14.ts
*/
/**
 * 14. 最长公共前缀
 * 
 * https://leetcode-cn.com/problems/longest-common-prefix/
 * 
编写一个函数来查找字符串数组中的最长公共前缀。

如果不存在公共前缀，返回空字符串 ""。

示例 1:

输入: ["flower","flow","flight"]
输出: "fl"
示例 2:

输入: ["dog","racecar","car"]
输出: ""
解释: 输入不存在公共前缀。
说明:

所有输入只包含小写字母 a-z 。
 */
/**
 * @param {string[]} strs
 * @return {string}
 */


const longestCommonPrefix = (strs: string[] = []) => {
    if (strs.length === 0) return ""
    if (strs.length === 1) return strs[0]
    let res = ""
    let [s, ...e] = strs
    for (let i = 0; i < s.length; i++) {
        let flag = e.every(item => item[i] === s[i])
        if (flag) { res += s[i] } else {
            break
        }
    }
    return res
};
console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["dog", "racecar", "car"]));
