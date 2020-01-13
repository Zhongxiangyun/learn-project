/**
* @description: 泛型   你这个小猪怎么还不请我吃饭（´・ω・） 
* @author: PresByter
* @date  : 2020/01/03 15:30:19
* @file  : generic.ts
*/

/**
 * 泛型 多个参数
 *  很多时候，类型是写死的，这样就不利于复用
 * 
 * 给 类型这种值也设置变量
 *  *  <类型变量名>，一般系统使用单字母大写，比如 T,E...
 *  写在函数名，参数列表之间，这是函数的
 */
// function fn(x: number): number {
//     return x * 10
// }

function fn<T>(x: T): number {
    return Number(x) * 10
}

fn(1) // 在调用fn函数的时候，同事给T赋值number

fn<number>(1)

fn<string>('1')

/**
 * function fn<T, S>(arg1: T, arg2: S): [T,S]{}
 */
function fn11<T, S>(arg1: T, arg2: S): [T, S] {
    return [arg1, arg2]
}

let a11 = fn11<number, string>(1, '222')

/**
 * function fn<T>(arg: T[]): T[]{}
 */

function fn12<T>(arg: T[]): T[] {
    return arg
}
fn12<number>([1, 2])
fn12<string>(['1', '2'])

/**
 *   泛型类型
 * 
 */

class MyArray<T>{
    private _data: T[] = []
    constructor() { }
    public mypush(v: T): number {
        this._data.push(v)
        return this._data.length
    }
}

let arr11: MyArray<number> = new MyArray()
arr11.mypush(1)
// arr11.mypush('1')

/**
 * 泛型 接口
 */

interface IFn1<T> {
    (x: T, y: T): number
}
let fn22: IFn1<number> = function (x, y) {
    return x + y
}
let fn23: IFn1<string> = function (x, y) {
    return Number(x) + Number(y)
}

interface Window {
    [attr: string]: any
}

window.aaa = 22

/**
 * 类 类型
 * <T>(c: {new(): T})
 */
/**
 * 泛型约束
 * <T extends 类型>
 *  */
interface Len {
    length: number
}
function fn33<T extends Len>(a:T) { 
    a.length
}
fn33('22')

