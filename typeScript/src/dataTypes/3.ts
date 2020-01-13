/**
 * 具有相同类型的一组有序数据的集合
 * 声明数组同时要确定数组存储的数据的类型
 * 同一个数组中的数据只能有一种类型
 */
let arr: number[];
arr.push(1)
// arr.push('1')
let arr1: Array<Number>//泛型
arr1.push(1)
arr1.push(1111)

// 元祖
let data1: [number, string, boolean]

// 注意：顺序要对应
data1[0] = 1
data1[1] = '1'
data1[2] = true
// data1[3] = 'true'  不能使用联合类型
let a1: string | number;
let a2: string & number;
// 枚举 enum
let gender: number = 1
enum Gender { Male = 1, Female = 2 }

if (Gender.Male) { }

let c: Element;

// any
// 类型推导
let bbb = 1
// bbb='111'

document.onclick = (e: MouseEvent) => { }//鼠标
document.onkeydown = (e: KeyboardEvent) => { }//键盘

let fn: (a: number, b: string) => string = (a: number, b: string) => a + b