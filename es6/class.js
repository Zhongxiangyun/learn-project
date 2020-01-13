class Person {
  constructor (name) {
    this.name = name;
  }
  getName () {
    console.log (this.name);
  }
}
// 继承
class Student extends Person {
  // 子类需要有自己的额初始化过程
  constructor (name, type) {
    super (name);
    this.type = type;
  }
}
let s = new Student ('222', '555');
s.getName ();
// alert  同步
// setInterval 异步

/**
 * Promise
 * 
 * 参数 cb ，执行的异步任务放到cb中
 * 
 * Promise对象内部 会维护一个状态
 * 默认是 pending
 * 成功：resolved
 * 失败：rejected
 * 
 * 下面有一个方法 then 
 * 两个参数 都是 cb  
 * resolved  => cb  成功
 * rejected  => cb  失败
 * 
 * 每一个 then 之后 默认返回一个成功的promise 即resolved
 * catch 和then 也会返回一个 默认的resolved状态的promise对象
 * 
 * Promise.race(iterable) 方法返回一个 promise，一旦迭代器中的某个promise解决或拒绝，返回的 promise就会解决或拒绝。
 * iterable  [p1,p2,p3] 只要一个成功，或者失败就立马 终止
 */

var p1 = new Promise ((resolve, reject) => {
  setTimeout (() => {
    console.log (1);
    reject ('error');
    resolve ('success');
  }, 0);
});
p1
  .then (
    () => {
      console.log (2);
    },
    () => {
      console.log ('a');
    }
  )
  .then (() => {
    /**
     return new Promise ((resolve, reject) => {
       reject ();
      });
*/
    // 上面的简化写法
    return Promise.reject ();
  })
  .then (() => {
    console.log (3);
  })
  .then (() => {
    console.log (4);
  })
  .then (() => {
    console.log ('end');
  })
  .catch (err => {
    console.log (err);
  });

function a ({id = '', ...rest} = {}) {
  console.log (rest);
}
a ({a: 4, c: 88, ji: 888});
