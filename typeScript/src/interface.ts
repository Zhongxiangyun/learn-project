/**
* @description: 你这个小猪怎么还不请我吃饭（´・ω・） 
* @author: PresByter
* @date  : 2020/01/02 16:38:15
* @file  : interface.ts
*/
/**
 * 接口中定义 的规则 只有抽象描述 不能有具体的值与实现，即设置默认值
 * 
 *  对象抽象 => 类（对象的抽象描述）
 *  类抽象 => 抽象类（如果一个类中拥有一个没有具体实现的抽象方法，就是抽象类）
 *  抽象类 => 接口（如果一个抽象类的成员全部是抽象的，那么可以看做接口）
 */

/**
* 如果我们希望检测不必要这么复杂
*      - 如果我们希望某些时候，只要包含其中一些规则即可
*          - 通过可选 ? 来实现
*          - 通过 as 断言 （来屏蔽 必传参数）
*          - 通过变量转换
*/
interface Options {
    width: number,
    height: number,
    readonly a?: number,
    [attribute: string]: any
}

function func(opts: Options) { }
// 断言  绕开 检测
func({ width: 55 } as Options)
// 先赋值给一个变量，也可以绕开 检测
let obj = {
    height: 200,
    width: 100,
    color: 'red',//多出的参数
    a: 1
}
func(obj)

/** 索引签名 */
/**
 * 希望规则是：一组由数字进行key命名的对象
 * 我们可以使用索引签名
 *  为数据定义一组具有某种特性的key的数据
 *  索引key的类型只能是 number 和 string 两种  [attribute: string]: any
 */
func({ ...obj, 'a': 111, 1: 5 })

/**
 * 函数类型的接口
 *  * 这个接口描述的是一个包含有fn并且值的类型为函数的结构体，并不是描述函数结构
 * 而是一个包含函数的对象结构
 */

// 我们也可以使用 interface 来约定定义函数的结构

// 定义的是函数
interface IFn {
    (x: number, y: number): number
}

let func1: IFn = (x: number = 0, y: number = 12): number => x + y


// 定义了一个接受一个MouseEvent类型参数的函数结构
interface MouseEventCallBack {
    (e: MouseEvent): any
}

let func2: MouseEventCallBack = function (a: MouseEvent) {

}

document.onclick = func2

interface ResponseCallBack {
    (rs: Response): any
}

// function todo(callback: ResponseCallBack) {
//     callback(new Response);
// }
// TODO:  or
function todo(callback: (rs: Response) => any) {
    callback(new Response);
}


interface AjaxData {
    code: number;
    data: any
}
interface AjaxCallback {
    (rs: AjaxData): any
}


function ajax(callback: AjaxCallback) {
    callback({
        code: 1,
        data: []
    });
}


ajax(function (x: AjaxData) {
    x.code
    x.data

    // x.message
});

// 类接口
/**
 * 类接口
 *      使用接口让某个类去符合某种契约
 * 
 * 类可以通过 implements 关键字去实现某个接口
 *      - implements 某个接口的类必须实现这个接口中确定所有的内容
 *      - 一个类只能有一个父类，但是可以implements多个接口，多个接口使用逗号分隔
 */
interface ISuper {
    fly(): void
}

interface IAdd {
    add(x: number, y: number): number
}

class Man {
    constructor(public name: string) {
    }
}
// 实现
class Superman extends Man implements ISuper, IAdd {
    fly() {
        console.log('起飞');
    }
    add(x: number, y: number) { return x + y }
}

let tom = new Superman('jack')

/**
 * 案例
 */
interface HttpOptions {
    method: string;
    url: string;
    isAsync: true;
}
interface HttpResponseData {
    code: any;
    data: any;
    message: string
}
function http(options: HttpOptions) {
    return new Promise((resolve: (arg0: any) => void, reject: (arg0: { code: any; message: string }) => void) => {
        let xhr = new XMLHttpRequest()
        xhr.open(options.method, options.url, options.isAsync)
        let data: HttpResponseData = JSON.parse(xhr.responseText)
        xhr.onload = function () {
            resolve(data)
        }
        xhr.onerror = function () {
            reject({
                code: xhr.response.code,
                message: 'Error'
            })
        }
        xhr.send()
    })
}

http({
    method: 'get',
    url: 'url',
    isAsync: true
}).then((rs: HttpResponseData) => { 
    rs.data
})

