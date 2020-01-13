/**
        symbol 基本类型

        属性私有化---数据保护
        表示 独一无二的值
        不能使用 new 调用，因为symbol 是一个原始类型的值，不是对象

        参数：是symbol的描述

        数据类型转换
        String
        toString
        Boolean  true
        不能转为 Number，不能使用任何运算符 运算 e.g.
        */
const y = Symbol ('y');
const data = {
  [Symbol ('y')]: '111',
  [y]: '[y]',
  y: 'y',
};

console.log (data.y);
console.log (data[y]);
console.log (data[Symbol ('y')]);
for (let i in data) {
  console.log (i);
}
console.log(Object.getOwnPropertySymbols(data))
// [Symbol(y), Symbol(y)]
console.log(data[Object.getOwnPropertySymbols(data)[0]])


