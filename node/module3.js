// 导出多个数据
/*
* 第一种
module.exports.a = 10
module.exports.b = 100
* 第二种
exports.a = 10
exports.b = 100
*/

/*
// 有问题的（对象值引用的问题，这样等于重新声明一个 exports，没有挂载到module上）
exports = {
    a: 10,
    b: 100,
}
// 没问题的
module.exports = {
    a: 10,
    b: 100,
}
*/