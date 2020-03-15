// console.log ();
/*
var a = 1;
function outer () {
  var a = 2;
  function inner () {
    a++;
    console.log (a);
    var a = 3;
    console.log (a);
  }
  inner ();
}
outer ();
*/

// const Animal = {
//   name: 'cat',
// };
// const animal1 = Object.create (Animal);
// delete animal1.name;
// console.log (animal1.name);

// (function() {
//     console.log(1);
//     setTimeout(function(){console.log(2)}, 1000);
//     setTimeout(function(){console.log(3)}, 0);
//     console.log(4);
// })();

// 长轮询、Websockets和服务器发送的事件之间有什么区别？

// 简要描述长期缓存以及如何使用webpack实现它

// const ary1 = [7, 1, 5, 2, 3, 6];
// const ary2 = [3, 8, 6, 20, 7];

// const diffs = (ary1, ary2) => {
//   let res = [];
//   for (let i = 0; i < ary1.length; i++) {
//     if (ary2.indexOf (ary1[i]) !== -1) {
//         res.push(ary1[i])
//     }
//   }
//   return res.sort();
// };
// // output: [3,6,7]
// console.log (diffs (ary1, ary2));

// input: a[3|bc]de
// output: abcbcbcde
/**
 *   Given a string with such a special case `[number|string]`, where `number` indicates the number of repetitions and `string` indicates the string that needs to be repeated. 
 */
const respeat = str => {
  let number = str.slice (str.search (/\[/g) + 1, str.search (/\|/g));
  let rstr = str.slice (str.search (/\|/g) + 1, str.search (/\]/g));
  return `${str.slice (0, str.search (/\[/g))}${rstr.repeat (number)}${str.slice (str.search (/\]/g) + 1)}`;
};
console.log (respeat ('a[3|bc]de'));

respeat ('a[3|bc]de');
