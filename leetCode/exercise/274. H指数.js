/**
*～╭════╮┌══════════════┐
* ╭╯开车║ ▁▂▃▅▆▇  |  ~~~
* ╰⊙═⊙╯╰══⊙══════⊙══╯
* @description: 274. H指数 
* @author: PresByter
* @date  : 2020/01/31 12:44:25
* @file  : 274. H指数.js
*/
/**
 * 给定一位研究者论文被引用次数的数组（被引用次数是非负整数）。编写一个方法，计算出研究者的 h 指数。

h 指数的定义: “h 代表“高引用次数”（high citations），一名科研人员的 h 指数是指他（她）的 （N 篇论文中）至多有 h 篇论文分别被引用了至少 h 次。（其余的 N - h 篇论文每篇被引用次数不多于 h 次。）”

 

示例:

输入: citations = [3,0,6,1,5]
输出: 3 
解释: 给定数组表示研究者总共有 5 篇论文，每篇论文相应的被引用了 3, 0, 6, 1, 5 次。
     由于研究者有 3 篇论文每篇至少被引用了 3 次，其余两篇论文每篇被引用不多于 3 次，所以她的 h 指数是 3。
 

说明: 如果 h 有多种可能的值，h 指数是其中最大的那个。

 */
// TODO:没搞明白
/**
 * @param {number[]} citations
 * @return {number}
 * @1 先给数组排序，然后从后向前遍历列表中的元素，当第h个元素不满足引用数大于等于h+1时退出，说明h再增加时不能满足条件。
 * 
 * @2 从小到大排序后，单次扫描（当前位置为i，未被扫描的个数为n - i，即h，从n开始递减），若当前扫描的元素大于n-i，则表示有n-i个数符合条件，就是答案
 */
var hIndex = function (citations) {
  let data = [];

  if (citations.length === 0) return 0;
  let res = citations.sort ().reverse ();
  const len = citations.length;
  //   console.log (res);

  for (let i = 0; i < len; i++) {
    if (res[i] > i) {
    //   data.push (i + 1);
      return i + 1;
    }
    // console.log (data);
  }
  return 0; // 当 [0,0,0]
};

const citations = [3, 0, 6, 1, 5];

console.log (hIndex (citations));
console.log (hIndex ([6, 6, 4, 8, 4, 3, 3, 10]));
console.log (hIndex ([0, 0, 1]));
