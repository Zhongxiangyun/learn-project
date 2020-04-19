/**
*～╭════╮┌══════════════┐
* ╭╯开车║ ▁▂▃▅▆▇  |  ~~~
* ╰⊙═⊙╯╰══⊙══════⊙══╯
* @description: 节流 
* @author: PresByter
* @date  : 2020/04/19 21:12:48
* @file  : jieliuandfangdou.js
*/
function throttle (cb, delay) {
  let last = 0;
  return function (...args) {
    let _this = this;
    let now = new Date ().valueOf ();
    if (now - last > delay) {
      last = now;
      cb.apply (_this, args);
    }
  };
}

document.getElementById ('throttle').onclick = throttle (function (e = '999') {
  console.log ('click', e);
}, 2000);
