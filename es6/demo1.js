const vm = require ('vm');

let str = 'console.log(9999)';
try {
  // eval (str);
  let func = new Function ('a', str);
  // func()
  //   setTimeout (str);
} catch (error) {
  console.log (error);
}
// vm.runInContext(str);
// https://www.bookstack.cn/read/nodejs-api-doc-cn/vm-class_Script.md
const script = new vm.Script (
  `
function add(a, b) {
    return a + b;
}

const x = add(1, 2);
`
);
// const res = script.runInThisContext ();
const res = script.runInContext ();
console.log(res);

// const cacheWithoutX = script.createCachedData();

// script.runInThisContext();

// const cacheWithX = script.createCachedData();
// console.log (script);

/**
 * 
 const x = 1;
 
 const context = { x: 2 };
 vm.createContext(context); // 上下文隔离化对象。
 
 // const code = 'x += 40; var y = 17;';
 const code = 'console.log(9999);';
 // `x` and `y` 是上下文中的全局变量。
 // 最初，x 的值为 2，因为这是 context.x 的值。
 vm.runInContext(code, context);
 
 console.log(context.x); // 42
 console.log(context.y); // 17
 
 console.log(x); // 1; y 没有定义。
*/
