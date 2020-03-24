/**
*～╭════╮┌══════════════┐
* ╭╯开车║ ▁▂▃▅▆▇  |  ~~~
* ╰⊙═⊙╯╰══⊙══════⊙══╯
* https://juejin.im/post/5e7822c3e51d4526f23a45ae?utm_source=gold_browser_extension 
* @description:  装饰器
* @author: PresByter
* @date  : 2020/03/24 09:04:02
* @file  : decorator.js
*/
const decoratorClass = (targetClass) => {
    targetClass.test = '123'
}
@decoratorClass
class Test {}
Test.test; // '123'
