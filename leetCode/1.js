/**
*～╭════╮┌══════════════┐
* ╭╯开车║ ▁▂▃▅▆▇  |  ~~~
* ╰⊙═⊙╯╰══⊙══════⊙══╯
* @description: 合并区间 
* @author: PresByter
* @date  : 2020/01/21 18:45:24
* @file  : 1.js
*/
/**
 * 给出一个区间的合集，请合并所有重叠的区间
 * 给出一个区间的集合，请合并所有重叠的区间。

示例 1:

输入: [[1,3],[2,6],[8,10],[15,18]]
输出: [[1,6],[8,10],[15,18]]
解释: 区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].
示例 2:

输入: [[1,4],[4,5]]
输出: [[1,5]]
解释: 区间 [1,4] 和 [4,5] 可被视为重叠区间。
 */
// const data = [[1, 3], [2, 6], [8, 10], [15, 18]];
const data = [[1,4],[0,2],[3,5]];
// 结果 [[1, 6], [8, 10], [15, 18]
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  let data = [];
  if (intervals.length == 0) {
    return [];
  }
  intervals.sort ((a, b) => a[0] - b[0]);
  console.log(intervals);
  
  let i = 0;
  while (i < intervals.length) {
    let start = intervals[i][0];
    let end = intervals[i][1];

    console.log('i',i);
    // 这里 要 每个值都进行一下判断
    while (i < intervals.length - 1 && end >= intervals[i + 1][0]) {
      end = Math.max (end, intervals[i + 1][1]);
      //   TODO:这时候 已经计算到下一个值，这里需要直接+1
      console.log(i);
      
      i++;
    }

    data.push ([start, end]);
    i++;
  }
  return data;
};

console.log (merge (data));
