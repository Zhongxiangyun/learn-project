// console.log(2222)
// export default 10
/**
* @description: 你这个小猪怎么还不请我吃饭（´・ω・） 
* @author: PresByter
* @date  : 2019/12/31 16:34:58
* @file  : 2.ts
*/
// 没有返回值 使用void
function fn(x: number, y: number): void {
}
fn(1, 1)
let fn1 = (x: number, y: number): number => x + y
let fn2: Function = (x: number, y: number): number => x + y
let fn3: (x: number, y: number) => number = (x: number, y: number): number => x + y

// 可选 参数
// let fn4: (x: number, y?: number) => number = (x: number, y?: number): number => x + y
let fn4: (x: number, y?: number) => number = (x: number, y: number = 0): number => x + y

fn4(2)

// 剩余参数
let fn5 = (...args: any[]): void => {
    console.log(args);
}
// 函数重载
function fn6(x: number, y: number): number
function fn6(x: string, y: string): string
function fn6(x: any, y: any): any {
    return x + y
}
fn6(1, 6)

// this : any
//   any  不会有提示 ，或者类型属性检测
let obj1 = {
    a: 1,
    fn(this: Document) { }
}
// document.onclick = obj1.fn

// obj1.fn()

class Persons {
    /**
    * ts 中的类 ，成员属性必须要声明后使用
    * ts 中的类的成员 不是在构造函数中声明的，是在class内，方法外
    */
    public username: string = 'Jack'
    // private username: string = ''
    // protected username: string = ''
    // readonly username: string = ''
    private _age: number = 10
    get age(): number {
        return this._age
    }
    set age(age: number) {
        if (age > 0 && age < 150) {
            this._age = age
        }
    }
    constructor(name: string) {
        this.username = name
    }
}
let p = new Persons('nick')
/**
 * 允许 在外部获取 和修改age的值，但是不希望修改成非法 ，如1000
 */
p.age = 18
// console.log(p.age);

// class MySql {
//     host: string = '127.0.0.1'
//     port: number = 80
//     username: string
//     password: string
//     dbname: string
//     constructor(host = '127.0.0.1', port?: number, username: string = 'root', password = '', dbname?: string) {
//         this.host = host
//         this.port = port
//         this.username = username
//         this.password = password
//         this.dbname = dbname
//     }
//     query(){}
//     insert(){}
//     uopdate(){}
// }

// let db = new MySql();

/** 单例 模式 */
class MySql {
    // 静态属性，不需要new出来的对象访问 直接是通过mysql类访问
    public static instance:any;
    host: string = '127.0.0.1'
    port: number = 80
    username: string
    password: string
    dbname: string
    private constructor(host = '127.0.0.1', port?: number, username: string = 'root', password = '', dbname?: string) {
        this.host = host
        this.port = port
        this.username = username
        this.password = password
        this.dbname = dbname
    }
    public static getInstance() {
        if(!MySql.instance){
            MySql.instance = new MySql();
        }
        return MySql.instance
    }
    query() { }
    insert() { }
    uopdate() { }
}

console.log(MySql.getInstance())

