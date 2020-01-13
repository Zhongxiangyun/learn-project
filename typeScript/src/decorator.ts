/**
* @description: 你这个小猪怎么还不请我吃饭（´・ω・） 
* @author: PresByter
* @date  : 2020/01/03 19:49:51
* @file  : decorator.ts
*/

class mPerson {
    username: string;
    age: number;

    constructor(username: string, age: number) {
        this.username = username;
        this.age = age;
    }

    say() {
        console.log('say');
    }
}

// 装饰器
// function Age(constructor: { new():any }):mPerson {
//     class Person2 extends constructor {
//         username = 'jack'
//         age=0
//     }
//     return Person2
//  }
/*
function Age<T extends {new(...args: any[]): {}}>(constructor: T): T {
    // console.log(1)
    class Person2 extends constructor {
        age: number = 0;
    }
    return Person2;
}
*/
function Age(v: number = 1) {

    return function <T extends { new(...args: any[]): {} }>(constructor: T): T {
        // 这个返回的函数才是真正的装饰器要执行的函数
        class Person2 extends constructor {
            age: number = v;
        }
        return Person2;
    }
}

// Age是一个装饰器函数，该函数会自动调用，不需要加()调用，调用的时候会传入下面这个对应
// 的class的构造函数
@Age()
class Person1 {
    username = 'jack'
    constructor() { }
}

let p1 = new Person1();
console.log(p1);

// 我希望装饰出来的age属性的值不是固定的
// 装饰器函数不是我们主动调用的
// 如果我们希望传入构造值，那么就得使用 ： 闭包
// Age就不能直接作为装饰器函数
// 该函数执行完成以后需要返回一个函数，这个返回的函数将作为实际的装饰器函数

@Age(10)
class Cat {
    username = 'cat'
    constructor() { }
}
let cat1 = new Cat();
console.log(cat1);

