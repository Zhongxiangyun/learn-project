# NodeJS基础
1. NodeJS是一个JS脚本解析器，任何操作系统下安装NodeJS本质上做的事情都是把NodeJS执行程序复制到一个目录，然后保证这个目录在系统PATH环境变量下，以便终端下可以使用node命令。

2. 终端下直接输入node命令可进入命令交互模式，很适合用来测试一些JS代码片段，比如正则表达式。

3. NodeJS使用`CMD`(也就是`common.js`)模块系统，主模块作为程序入口点，所有模块在执行过程中只初始化一次。

4. 除非JS模块不能满足需求，否则不要轻易使用二进制模块，否则你的用户会叫苦连天。


# 小贴士

## require和import的区别
- [require和import的区别](https://github.com/funnycoderstar/blog/issues/106)

CommonJs模块输出的是一个值的拷贝，ES6模块输出的是值的引用。
CommonJs模块是运行时加载，ES6模块是编译时输出接口。


引入的模块是 只读 的: 你不能修改引入的模块。只有导出他们的模块才能修改其值。