/**
*～╭════╮┌══════════════┐
* ╭╯开车║ ▁▂▃▅▆▇  |  ~~~
* ╰⊙═⊙╯╰══⊙══════⊙══╯
* @description: 事件循环与消息队列 
* @author: PresByter
* @date  : 2020/02/17 11:34:51
* @file  : 1.js
*/
/*
console.log('script start')

setTimeout(function() {
    console.log('timer over')
}, 0)

Promise.resolve().then(function() {
    console.log('promise1')
}).then(function() {
    console.log('promise2')
})

console.log('script end')
*/
// script start
// script end
// promise1
// promise2
// timer over
/*
setTimeout(_ => console.log(4))

new Promise(resolve => {
  resolve()
  console.log(1)
}).then(_ => {
  console.log(3)
})

console.log(2)
// 1、2、3、4
*/
/*
setTimeout(_ => console.log(4))

new Promise(resolve => {
  resolve()
  console.log(1)
}).then(_ => {
  console.log(3)
  Promise.resolve().then(_ => {
    console.log('before timeout')
  }).then(_ => {
    Promise.resolve().then(_ => {
      console.log('also before timeout')
    })
  })
})

console.log(2)
*/
// 1
// 2
// 3
// before timeout
// also before timeout
// 4

process.nextTick (_ => {
  console.log ('process');
});
setTimeout (_ => console.log ('setTimeout'),1);
setImmediate (_ => console.log ('immediate'));
new Promise (resolve => {
  resolve ();
  console.log ('Promise');
});
