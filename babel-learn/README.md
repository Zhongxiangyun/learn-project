## AST 是什么
抽象语法树 `(Abstract Syntax Tree)`，简称 `AST`，它是源代码语法结
构的一种抽象表示。
它以树状的形式表现编程语言的语法结构，树上的每个节点都表示源代码中的一种结构。

## AST 有什么用
`AST` 运用广泛，比如：

编辑器的错误提示、代码格式化、代码高亮、代码自动补全；
`elint`、`pretiier` 对代码错误或风格的检查；
`webpack` 通过 `babel` 转译 `javascript` 语法；

并且如果你想了解 js 编译执行的原理，那么你就得了解 AST。

## AST 转化过程

- @babel/parser : 将 js 代码 ------->>>  AST 抽象语法树；
- @babel/traverse 对 AST 节点进行递归遍历；
- @babel/types 对具体的 AST 节点进行进行修改；
- @babel/generator :  AST 抽象语法树 ------->>> 新的 js 代码；


- [原文链接](https://juejin.im/post/5e0a245df265da33cf1aea91)
- [babel 开发手册](https://github.com/jamiebuilds/babel-handbook/blob/master/translations/zh-Hans/README.md)
- [Babel 插件手册](https://github.com/jamiebuilds/babel-handbook/blob/master/translations/zh-Hans/plugin-handbook.md)