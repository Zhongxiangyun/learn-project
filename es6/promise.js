/**
 * Promise 对象用于表示一个异步操作的最终完成 (或失败), 及其结果值.
 * pending resolved rejected
 * 
 * Promise.all(iterable) 方法返回一个 Promise 实例，
 * 此实例在 iterable 参数内所有的 promise 都“完成（resolved）”
 * 或参数中不包含 promise 时回调完成（resolve）；
 * 如果参数中  promise 有一个失败（rejected），
 * 此实例回调失败（reject），失败原因的是第一个失败 promise 的结果。
 * 
 * Promise.resolve(value)方法返回一个以给定值解析后的Promise 对象。
 * 如果该值为promise，返回这个promise；如果这个值是thenable（即带有"then" 方法)），
 * 返回的promise会“跟随”这个thenable的对象，采用它的最终状态；
 * 否则返回的promise将以此值完成。此函数将类promise对象的多层嵌套展平。
 */
/**
 * WeakMap  对象是一组键/值对的集合，其中的键是弱引用的。其键必须是对象，而值可以是任意的。
 * WeakMap 的 key 只能是 Object 类型。 原始数据类型 是不能作为 key 的（比如 Symbol）。
 * 
 * 可以作为垃圾回收使用
 */
function onClick1 () {
  window.open ('https://www.baidu.com/');
  console.log ('onClick1');
}
function onClick21 () {
  location.href = 'https://www.baidu.com/';
  console.log ('onClick21');
}
function onClick22 () {
  location.href = 'https://www.baidu.com/';
  // 3s
  let start = +new Date ();
  while (+new Date () - start < 3 * 1000) {
  }
  console.log ('onClick22');
}
function onClick23 () {
  // 未能加载成功的网址
  location.href = 'https://www.9999.com/';
  // 3s
  let start = +new Date ();
  while (+new Date () - start < 3 * 1000) {
  }
  console.log ('onClick23');
}
function onClick3 () {
  history.back ();
  // 3s
  let start = +new Date ();
  while (+new Date () - start < 3 * 1000) {
  }
  console.log ('onClick3');
}

document.querySelector ('.onClick1').onclick  = onClick1;
document.querySelector ('.onClick21').onclick  = onClick21;
document.querySelector ('.onClick22').onclick  = onClick22;
document.querySelector ('.onClick23').onclick  = onClick23;
document.querySelector ('.onClick3').onclick  = onClick3;
