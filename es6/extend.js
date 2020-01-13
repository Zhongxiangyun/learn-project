/**
 * 字符串 扩展
 */

/*
// 用typescript
// 所有机试题目请用typescript完成
// question 1
const menu = ['商品1', '商品2', '商品3', '商品4']
// step 1: 根据menu的数据，用jquery 完成一个模拟原生select框组件
// step 2：同原生select框支持相应键盘事件

// question 2
// 请评价以下代码并给出改进意见

if (window.addEventListener){
    var addListener = function (el, type, listener, useCapture){
        el.addEventListener(type, listener, useCapture);
    }
} else if (document.all){
    addListener = function (el, type, listener){
        el.attachEvent('on' + type, function (){
            listener.apply(el);
        })
    }
}
*/
console.log ('a'.repeat (3));
/**
 * 字符串扩展
 * repeat
 * includes()  startsWith() endsWith()
 */

/**
 * 数组扩展
 * Array.from() 方法从一个类似数组或可迭代对象创建一个新的，浅拷贝的数组实例。
 * Array.of() 方法创建一个具有可变数量参数的新数组实例，而不考虑参数的数量或类型。
 * find() 方法返回数组中满足提供的测试函数的第一个元素的值。否则返回 undefined
 * findIndex()方法返回数组中满足提供的测试函数的第一个元素的索引。否则返回-1。
 * fill() 方法用一个固定值填充一个数组中从起始索引到终止索引内的全部元素。不包括终止索引。  arr.fill(value[, start[, end]])
 */

/**
  * 对象的扩展
  */

var obj1 = {
  //   fn () {
  //     console.log (111);
  //   },
  a: 1,
};
var obj2 = {
  //   fn () {
  //     console.log (111);
  //   },
  a: 1,
};
// obj1.fn ();
/**
 * Object.is() 方法判断两个值是否是相同的值。 Object.is(value1, value2);
 * Object.assign() 方法用于将所有可枚举属性的值从一个或多个源对象复制到目标对象。它将返回目标对象。
 * 
 */
console.log (Object.is (1, 1));

const fn3 = (a, b) => ({a, b});
/**
 * 箭头函数 不能使用call apply bind 改变this的指向
 */
