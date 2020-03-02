/**
*～╭════╮┌══════════════┐
* ╭╯开车║ ▁▂▃▅▆▇  |  ~~~
* ╰⊙═⊙╯╰══⊙══════⊙══╯
* @description: 简历 
* @author: PresByter
* @date  : 2020/03/02 22:57:10
* @file  : demo.js
*/
function someAsyncProcess(){
    console.log('someAsyncProcess');
  }
  async function someError () {
    await someAsyncProcess ();
    throw new Error ('发生异常---someError');
  }
  async function main () {
    try {
      someError ();
    } catch (e) {
      console.log ('异常4');
    }
    try {
     await someError ();
    } catch (e) {
      console.log ('异常5');
    }
  }
  main ()