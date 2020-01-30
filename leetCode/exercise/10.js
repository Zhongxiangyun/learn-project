/**
*～╭════╮┌══════════════┐
* ╭╯开车║ ▁▂▃▅▆▇  |  ~~~
* ╰⊙═⊙╯╰══⊙══════⊙══╯
* @description: 1030. 距离顺序排列矩阵单元格 
* @author: PresByter
* @date  : 2020/01/27 16:16:28
* @file  : 10.js
*/
/**
 * 给出 R 行 C 列的矩阵，其中的单元格的整数坐标为 (r, c)，满足 0 <= r < R 且 0 <= c < C。

另外，我们在该矩阵中给出了一个坐标为 (r0, c0) 的单元格。

返回矩阵中的所有单元格的坐标，并按到 (r0, c0) 的距离从最小到最大的顺序排，其中，两单元格(r1, c1) 和 (r2, c2) 之间的距离是曼哈顿距离，|r1 - r2| + |c1 - c2|。（你可以按任何满足此条件的顺序返回答案。）

 

示例 1：

输入：R = 1, C = 2, r0 = 0, c0 = 0     一行两列
输出：[[0,0],[0,1]]
解释：从 (r0, c0) 到其他单元格的距离为：[0,1]
示例 2：

输入：R = 2, C = 2, r0 = 0, c0 = 1      两行两列
输出：[[0,1],[0,0],[1,1],[1,0]]
解释：从 (r0, c0) 到其他单元格的距离为：[0,1,1,2]
[[0,1],[1,1],[0,0],[1,0]] 也会被视作正确答案。
示例 3：

输入：R = 2, C = 3, r0 = 1, c0 = 2
输出：[[1,2],[0,2],[1,1],[0,1],[1,0],[0,0]]
解释：从 (r0, c0) 到其他单元格的距离为：[0,1,1,2,2,3]
其他满足题目要求的答案也会被视为正确，例如 [[1,2],[1,1],[0,2],[1,0],[0,1],[0,0]]。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/matrix-cells-in-distance-order
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
// 首先确定是吗是矩阵
// https://baike.baidu.com/item/%E7%9F%A9%E9%98%B5/18069?fr=aladdin
/**
 * @param {number} R
 * @param {number} C
 * @param {number} r0
 * @param {number} c0
 * @return {number[][]}
 */
// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
// sort 方法
var allCellsDistOrder = function (R, C, r0, c0) {
  let res = [];
  for (let i = 0; i < R; i++) {
    for (let j = 0; j < C; j++) {
      res.push ([i, j]);
    }
  }
  return res.sort ((a, b) => {
    return (
      Math.abs (r0 - a[0]) +
      Math.abs (c0 - a[1]) -
      (Math.abs (r0 - b[0]) + Math.abs (c0 - b[1]))
    );
  });
};

var allCellsDistOrder = function (R, C, r0, c0) {
  let res = [];
  let obj = {};
  for (let i = 0; i < R; i++) {
    for (let j = 0; j < C; j++) {
      //   res.push ([i, j]);
      if (obj[Math.abs (r0 - i) + Math.abs (c0 - j)]) {
        obj[Math.abs (r0 - i) + Math.abs (c0 - j)].push ([i, j]);
      } else {
        obj[Math.abs (r0 - i) + Math.abs (c0 - j)] = [[i, j]];
      }
    }
  }
  Object.values (obj).map (v => {
    res.push (...v);
  });
  return res;
};
console.log (allCellsDistOrder (2, 3, 1, 2));
// console.log (allCellsDistOrder (1, 2, 0, 1));
