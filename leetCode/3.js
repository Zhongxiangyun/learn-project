/**
*～╭════╮┌══════════════┐
* ╭╯开车║ ▁▂▃▅▆▇  |  ~~~
* ╰⊙═⊙╯╰══⊙══════⊙══╯
* @description:  两个数组的交集
* @author: PresByter
* @date  : 2020/01/21 19:19:57
* @file  : 3.js
*/
// 计算 两个数组的交集  arr1=[1,2,2,1];arr2=[2,2]  => [2]

const arr1 = [1, 2, 2, 1];
const arr2 = [2, 2];

const isMix = (arr1, arr2) => {
  let arr11 = Array.from (new Set ([...arr1]));
  let arr22 = Array.from (new Set ([...arr2]));
  let mixs = [];
  arr11.forEach (v => {
    arr22.findIndex (item => v === item) !== -1 && mixs.push (v);
  });
  return mixs;
};

let res = isMix (arr1, arr2);

// 计算 两个数组的交集 ，并返回交集的出现的次数 arr1=[1,2,2,1];arr2=[2,2]  => [2,2]

let n = 0;
arr1.forEach (v => {
  if (res[0] === v) {
    n++;
  }
});

res = [...res, n];
console.log (res);
