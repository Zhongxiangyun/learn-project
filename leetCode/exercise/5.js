/**
*～╭════╮┌══════════════┐
* ╭╯开车║ ▁▂▃▅▆▇  |  ~~~
* ╰⊙═⊙╯╰══⊙══════⊙══╯
* @description:  数组的相对排序
* @author: PresByter
* @date  : 2020/01/24 14:20:28
* @file  : 5.js
*/
/**
 * 给你两个数组，arr1 和 arr2，

arr2 中的元素各不相同
arr2 中的每个元素都出现在 arr1 中
对 arr1 中的元素进行排序，使 arr1 中项的相对顺序和 arr2 中的相对顺序相同。
未在 arr2 中出现过的元素需要按照升序放在 arr1 的末尾。

输入：arr1 = [2,3,1,3,2,4,6,7,9,2,19], arr2 = [2,1,4,3,9,6]
输出：[2,2,2,1,4,3,3,9,6,7,19]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/relative-sort-array
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
const arr1 = [2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19,8], arr2 = [2, 1, 4, 3, 9, 6];
function isImprement (arr1, arr2) {
  let res = [];
  let end = [];
  let mid = [];
  arr1.forEach (e => {
    const index = arr2.indexOf (e);
    if (index !== -1) {
      mid[index] && mid[index].push (e);
      if (!mid[index]) {
        mid[index] = [e];
      }
    } else {
      end.push (e);
    }
    // console.log (mid, end);
  });
  mid.forEach(v=>{
    res.push(...v)
  })
  return [...res, ...end.sort((a, b) => a - b)];
}
const res = isImprement (arr1, arr2);
console.log (res);
