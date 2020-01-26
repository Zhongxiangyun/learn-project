/**
*～╭════╮┌══════════════┐
* ╭╯开车║ ▁▂▃▅▆▇  |  ~~~
* ╰⊙═⊙╯╰══⊙══════⊙══╯
* @description:  350. 两个数组的交集 II
* @author: PresByter
* @date  : 2020/01/21 19:19:57
* @file  : 3.js
*/
// 计算 两个数组的交集  arr1=[1,2,2,1];arr2=[2,2]  => [2]

const arr1 = [1, 2];
const arr2 = [1, 1];

const isMix = (arr1, arr2) => {
  let arr11 = Array.from (new Set ([...arr1]));
  let arr22 = Array.from (new Set ([...arr2]));
  let mixs = [];
  arr11.forEach (v => {
    arr22.findIndex (item => v === item) !== -1 && mixs.push (v);
  });
  return mixs;
}; 

// res = [...res, n];
// var intersect = function (nums1, nums2) {
//   let res = [];
//   arr1.length < arr2.length
//     ? arr1.forEach (v => {
//         arr2.findIndex (item => v === item) !== -1 && res.push (v);
//       })
//     : arr2.forEach (v => {
//         arr1.findIndex (item => v === item) !== -1 && res.push (v);
//       });
//   return res;
// };
// const arr1 = [4,9,5]
// const arr2 = [9,4,9,8,4]
var intersect = function (arr1, arr2) {
  let res = [];
  let obj = {};
  for (let i = 0; i < arr1.length; i++) {
    obj[arr1[i]] ? obj[arr1[i]]++ : (obj[arr1[i]] = 1);
  }
  for (let i = 0; i < arr2.length; i++) {
    obj[arr2[i]] && res.push(arr2[i]);
    obj[arr2[i]] && obj[arr2[i]]--;
  }
  console.log(obj);
  
  return res;
  // return Array.from (new Set ([...res]));
};

console.log (intersect (arr1, arr2));
