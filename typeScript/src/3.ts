/**
* @description: 你这个小猪怎么还不请我吃饭（´・ω・） 
* @author: PresByter
* @date  : 2020/01/02 15:44:45
* @file  : 3.ts
*/
class Person {
    // 在构造函数 的参数中 如果直接 使用public等修饰符，则等同于创建了该属性
    constructor(public username: string = '', public age: number = 1) {
        this.username = username
        this.age = age
    }
}
// class Student extends Person {
//     /**
//      * 如果子类没有重写构造函数，则直接 继承 父类
//      * 如果子类重写了构造函数
//      *      注意：需要手动调用父类的构造函数
//      *      super：关键字，表示父类（需要把子类自己的参数  传进去）
//      */
//     constructor(username: string, age: number, public type: string = 'A') {
//         super(username, age)
//     }
// }

// let s1 = new Student('Jack', 121)
// console.log(s1);



// 166 抽象类
abstract class Person2 {  //定为抽象类  不能实例化 （new 是不行的）
    // 在构造函数 的参数中 如果直接 使用public等修饰符，则等同于创建了该属性
    constructor(public username: string = '', public age: number = 1) {
        this.username = username
        this.age = age
    }
    say(){}
    /**
     * 虽然 子类都会有这样的特性 学习 但是子类的学习具体过程 不一样，所以在父类确定不了了
     * study方法的具体实现，父类只能有抽象约定，接收什么参数，返回什么内容、
     * 如果 一个类中 有抽象的方法了，那么这个类 也必须是抽象的
     */
    abstract study():void  // 抽象 是没有代码实现的
}
class Student extends Person {
    /**
     * 如果子类没有重写构造函数，则直接 继承 父类
     * 如果子类重写了构造函数
     *      注意：需要手动调用父类的构造函数
     *      super：关键字，表示父类（需要把子类自己的参数  传进去）
     */
    constructor(username: string, age: number, public type: string = 'A') {
        super(username, age)
    }
}
// 如果一个继承了抽象的父类，就必须实现所有的抽象方法 ，否则这个子类必须是抽象类
class P extends Person2 {
    study(){}
}
//  &&
abstract class P1 extends Person2 {}

// let s1 = new Person2('Jack', 121)