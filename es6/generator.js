/**
 * 生成器对象是由一个 generator function 返回的,并且它符合可迭代协议和迭代器协议。
 * 
 * 方法
Generator.prototype.next()      返回一个由 yield表达式生成的值。
Generator.prototype.return()    返回给定的值并结束生成器。
Generator.prototype.throw()     向生成器抛出一个错误。

遇到 yield 变停止迭代
 */
function* f1 () {
  console.log (1);
  //   yield console.log (2);
  let res = yield getData ();
  console.log (res);

  let res1 = yield getData ();
  console.log (res1);

  let res2 = yield getData ();
  console.log (res2);

  console.log (3);
}

function getData () {
  setTimeout (() => {
    console.log (2);
    f.next (100);
  }, 1000);
}
// 返回一个迭代器函数
let f = f1 ();
// f.next ();  //1 2 100 3
// f.next ();  //1 undefined 3 2
// 1 3 2

//------------------------------------------
function getData () {
  return new Promise ((resolve, reject) => {
    setTimeout (() => {
      resolve (100);
    }, 1000);
  });
}

function co (callback) {
  let cb = callback ();
  //   递归调用next方法
  //   cb.next ();
  function next (d) {
    let res = cb.next (d); //{value,done}
    if (res.done) return;

    res.value.then (data => {
      next (data);
    });
  }
  next ();
}

// co (f1);

// async await

console.time ();
async function fa () {
  console.log (111);
  for (let i = 0; i < 10; i++) {
    let res = await getData ();
    console.log (res);
  }
  console.log ('end');
  console.timeEnd ();
}
fa ();

// console.timeEnd ();
