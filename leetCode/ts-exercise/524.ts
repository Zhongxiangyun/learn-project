/**
 *～╭════╮┌══════════════┐
 * ╭╯开车║ ▁▂▃▅▆▇  |  ~~~
 * ╰⊙═⊙╯╰══⊙══════⊙══╯
 * @description:  524. 通过删除字母匹配到字典里最长单词
 * @author: PresByter
 * @date  : 2020/02/11 19:49:36
 * @file  : 524.ts
 */
/**
 * 给定一个字符串和一个字符串字典，找到字典里面最长的字符串，该字符串可以通过删除给定字符串的某些字符来得到。如果答案不止一个，返回长度最长且字典顺序最小的字符串。如果答案不存在，则返回空字符串。

示例 1:

输入:
s = "abpcplea", d = ["ale","apple","monkey","plea"]

输出: 
"apple"
示例 2:

输入:
s = "abpcplea", d = ["a","b","c"]

输出: 
"a"
说明:

所有输入的字符串只包含小写字母。
字典的大小不会超过 1000。
所有输入的字符串长度不会超过 1000。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/longest-word-in-dictionary-through-deleting
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
/**
 * @param {string} s
 * @param {string[]} d
 * @return {string}
 */
interface words {
    attribute?: string | number
}
const findLongestWord = function (s: string = '', d: string[] = []): string {
    if (s.length > 1000) return ''
    if (d.length > 1000) return ''
    // let obj: words = {}
    let arrstr: any[] = []
    let arrstrlength: number[] = []

    for (let i: number = 0; i < d.length; i++) {
        // obj[d[i]] = s  //需要配置 "suppressImplicitAnyIndexErrors": true,or 或者将obj设置为any即  let obj: any = {}
        arrstr[i] = s
        for (let j: number = 0; j < d[i].length; j++) {
            let istr = d[i][j]
            // let hasIndex: number = obj[d[i]].search(istr)
            let hasIndex: number = arrstr[i].search(istr)
            // hasIndex !== -1 ? obj[d[i]] = obj[d[i]].replace(istr, '') : obj[d[i]] = false
            hasIndex !== -1 ? arrstr[i] = arrstr[i].replace(istr, '') : arrstr[i] = false
            if (hasIndex === -1) break
        }
    }
    arrstrlength = arrstr.map((v, i: number) => {
        return typeof v === 'boolean' ? -1 : s.length - v.length
    })
    let index: number = arrstrlength.indexOf(Math.max(...arrstrlength));
    let indexArr: string[] = []
    arrstrlength.forEach((v: number, i: number) => {
        // console.log(i, v, Math.max(...arrstrlength));
        if (v === Math.max(...arrstrlength)) {
            indexArr.push(d[i])
        }
    })
    // console.log(indexArr);
    let min: string = indexArr[0]
    for (let i: number = 0; i < indexArr.length; i++) {
        // console.log('1111', min, indexArr[i]);
        if (min >= indexArr[i]) {
            min = indexArr[i]
        }

    }
    // console.log('min', min);
    return min
};
console.log(findLongestWord("abpcplea", ["ale", "apple", "monkey", "plea"]));
console.log(findLongestWord("abpcplea", ["a", "b", "c"]));
console.log(findLongestWord("bab",
    ["ba", "ab", "a", "b"]));

