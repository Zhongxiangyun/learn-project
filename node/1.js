console.log('node')
console.log(__dirname)
// F:\新建文件夹\Node-TS-Koa-vue\node
console.log(__filename)
// F:\新建文件夹\Node-TS-Koa-vue\node\1.js

// console.log(global)
/**
 * https://nodejs.org/docs/latest-v11.x/api/globals.html
 Object [global] {
  global: [Circular],
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] { [Symbol(util.promisify.custom)]: [Function] },
  queueMicrotask: [Function: queueMicrotask],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(util.promisify.custom)]: [Function]
  }
}
 */

/*
setTimeout(()=>{console.log('setTimeout1')},10)
setTimeout(()=>{console.log('setTimeout2')},0)
setTimeout(()=>{console.log('setTimeout3')},0)
console.log('end')
*/

// 宏任务 script  setTimeout setInterval （开启Promise，setTimeout属于宏任务）
// 微任务 Promise process.nextTick (这两个函数的后续的东西属于微任务)
// 同步 主线程（宏任务->微任务） 异步 事件循环（event loop）   ->执行栈
/**
 * 优先级
 */
/*
console.log('script start')

setTimeout(()=>{console.log('setTimeout')},0)

new Promise(resolve=>{
    console.log('Promise start')
    resolve()
}).then(()=>console.log('Promise1')).then(()=>console.log('Promise2'))

console.log('script end')
*/
/**
 * 宏任务 
start  
end
* Promise 同步(属于微任务)
Promise1
Promise2

* event loop
setTimeout
 */

 /**
    script start
    Promise start
    script end
    Promise1
    Promise2
    setTimeout
  */

 console.log('script start')

 setTimeout(()=>{console.log('setTimeout1')},0)
 
 new Promise(resolve=>{
     console.log('Promise start')
     setTimeout(()=>{console.log('setTimeout2')
     resolve()
    },0)
 }).then(()=>console.log('Promise1')).then(()=>console.log('Promise2'))
 
 console.log('script end')

// script start
// Promise start
// script end
// setTimeout1
// setTimeout2
// Promise1
// Promise2