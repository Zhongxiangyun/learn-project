const commander = require ('commander');
const fs = require ('fs');
/**
 * commander
	.parse(argv: string[])
		解析执行传入的 argv 命令字符串，通常改命令字符串来自用户在命令行的输入，process.argv
        commander 同时会默认创建一个 -h, --help 的选项
    用法：
    node index.js -h
        Usage: index [options]

        Options:
        -V, --version  output the version number
        -h, --help     output usage information
 */
// 设置当前命令的版本
/**
 * node index.js -V
 * //结果 v1.0.0
 */
commander.version ('v1.0.0', '-v,--version');

// 设置其他的options
// --name的<val>是当前选项的参数值：<> 必填参数   [] 可选择参数
// 命令                     参数       描述信息  默认name
commander.option ('-n,--name <val>', '设置名称', 'presbyter');

// 如果 第三个参数是一个函数的话，那么该函数会接收来自用户输入值，并返回一个值作为最后 这个选项实际的值
// commander.option ('-n,--name <val>', '设置名称', val=>{
//     // 将用户输入的参数进行二次操作
//     console.log('用户输入的参数',val)
//     return val.toUpperCase()
// });

// 设置命令的动作
commander.action(()=>{
    console.log(`Hello ${commander.name}`)
})

// let createCommander=commander.command('create <app-name>','创建项目')
// // createCommander.option()
// createCommander.action(()=>{
//     console.log(`create ${commander.name}`)
// })
/**
 * description(str)
		命令描述
	.alias(str)
		设置命令别名
	.usage(str)
		设置或获取当前命令的使用说明
 */
commander.command('create <app-name>').alias('c').usage('使用说明').description('创建项目').action((val)=>{
    console.log(`create  ${val}`)
    fs.mkdirSync(val)
})
// 解析执行传入的 argv 命令字符串，通常改命令字符串来自用户在命令行的输入，process.argvcommander 同时会默认创建一个 -h
commander.parse (process.argv);

// console.log(commander)