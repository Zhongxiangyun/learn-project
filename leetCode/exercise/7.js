/**
*～╭════╮┌══════════════┐
* ╭╯开车║ ▁▂▃▅▆▇  |  ~~~
* ╰⊙═⊙╯╰══⊙══════⊙══╯
* @description: 976. 三角形的最大周长 
* @author: PresByter
* @date  : 2020/01/24 14:54:12
* @file  : 7.js
*/
/**
 * 给定由一些正数（代表长度）组成的数组 A，返回由其中三个长度组成的、面积不为零的三角形的最大周长。

如果不能形成任何面积不为零的三角形，返回 0。

示例 1：

输入：[2,1,2]
输出：5
示例 2：

输入：[1,2,1]
输出：0
示例 3：

输入：[3,2,3,4]
输出：10
示例 4：

输入：[3,6,2,3]
输出：8

 */

/**
 * @param {number[]} A
 * @return {number}
 */
// TODO:题意可以翻译为：求满足三角形定义的三边之和最大值
//三角形定义上要求【任意两边和大于第三边】，即【短边和大于长边】，我们只需排序，依次从高到低取三条边，满足定义返回三边和即可。

var largestPerimeter = function (A) {
  if (A.length < 3) return 0;
  const rA = A.sort ((a, b) => a - b);
  for (let i = rA.length - 1; i >= 0; i--) {
    let tem = [rA[i], rA[i - 1], rA[i - 2]];
    if (isAngle (tem)) {
      return tem.reduce ((a, b) => a + b);
    } else if (i <= 2) {
      return 0;
    }
  }
};
function isAngle (arr) {
  if (arr[2] + arr[1] > arr[0]) {
    return true;
  } else {
    return false;
  }
}
// const A = [3, 2, 3, 4];
// const A = [3,6,2,3];
const A = [3, 6, 3];
const res = largestPerimeter (A);
console.log (res);
