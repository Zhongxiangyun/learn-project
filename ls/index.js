/**
 * ls
 * 输出  当前命令指定的目录下的文件以及文件夹
 * 
 * 指定的路径
 * ls D:\
 */
// 加载模块
const commander = require ('commander');
// 加载fs
const fs = require ('fs');
// 配色
const chalk=require('chalk')

console.log(chalk.blue.bgRed.bold('hhhh'))
// 设置 当前 命令工具的版本
commander.version ('v1.0.0', '-v', '--version');

// 子命令
const subCommander = commander.command (' <path>');

subCommander.option ('-n,--name', '设置名称');

// 设置命令选项
commander.option ('-p, --path [path]', '设置要显示的目录', __dirname);

// 以列表的形式显示，如果选项不接收用户输入的值，那么这个选项将以Boolean的形式提供给后面使用
commander.option ('-l, --list', '以列表的形式显示');
// 实现命令的具体逻辑
// subCommander.action (() => {
commander.action (() => {
  // path 就是命令中定义的 <path>
  // console.log (666, commander.path);
  // 把当前命令指定的目录下的文件以及文件夹全部显示在控制台中
  try {
    // const files = fs.readdirSync (__dirname);
    // const files = fs.readdirSync (path.args[0]); //这里是commander 版本变化发生的问题
    const files = fs.readdirSync (commander.path); //这里是commander 版本变化发生的问题
    // console.log (files);
    console.log (666);
    console.log (commander);
    if (commander.list) {
      let output = files
        .map (file => {
          let stat = fs.statSync (commander.path + '/' + file);
          let type = stat.isDirectory () ? '目录' : '文件';
          return `[${type}] ${file}\r\n`;
        })
        .join ('');
      console.log (output);
    }
  } catch (error) {
    throw error;
  }
});
// 把process.argv 交给parse解析之前进行一个简单的处理，少于3个参数，表示使用的是默认值
/**
[
  'C:\\Program Files\\nodejs\\node.exe',
  'F:\\新建文件夹\\Node-TS-Koa-vue\\ls\\index',
]
 */
if (process.argv.length < 3) {
  process.argv.push (__dirname);
}
// console.log (process.argv);
commander.parse (process.argv);
