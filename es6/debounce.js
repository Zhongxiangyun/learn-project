/**
*～╭════╮┌══════════════┐
* ╭╯开车║ ▁▂▃▅▆▇  |  ~~~
* ╰⊙═⊙╯╰══⊙══════⊙══╯
* @description:防抖  
* @author: PresByter
* @date  : 2020/04/19 21:26:25
* @file  : debounce.js
*/
function debounce (cb, delay) {
  let timer = null;
  return function () {
    let _this = this;
    clearTimeout (timer);
    timer = setTimeout (() => {
      cb.apply (_this);
    }, delay);
  };
}
document.getElementById ('debounce').onclick = debounce (function () {
  console.log ('click');
}, 2000);
