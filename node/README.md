# CLI 和 GUI
命令行 ，图形界面

REPL
read eval print loop

.break    Sometimes you get stuck, this gets you out
.clear    Alias for .break
.editor   Enter editor mode
.exit     Exit the repl
.help     Print this help message
.load     Load JS from a file into the REPL session
.save     Save all evaluated commands in this REPL session to a file


# 全局对象 global
- console
- __dirname 当前模块的目录名称 绝对路径
- __filename 当前模块的目录名称 所在的绝对路径
- eventloop

# 宏任务
# 微任务
# 模块化
1. 定义模块
2. 模块导入
3. 模块导出
[http://nodejs.cn/api/modules.html](http://nodejs.cn/api/modules.html)
每一个模块下面都有一个内置的对象：module
模块文件的一些信息
```js
Module {
  id: '.',  当前模块的唯一标识，当前模块的绝对路径
  exports: {},
  parent: null,
  filename: 'F:\\project\\Node-TS-Koa-vue\\node\\module.js', 当前模块的文件
  loaded: false,
  children:
   [ Module {
       id: 'F:\\project\\Node-TS-Koa-vue\\node\\module2.js',
       exports: [Object],
       parent: [Circular],
       filename: 'F:\\project\\Node-TS-Koa-vue\\node\\module2.js',
       loaded: true,
       children: [],
       paths: [Array] } ],
  paths:
   [ 'F:\\project\\Node-TS-Koa-vue\\node\\node_modules',
     'F:\\project\\Node-TS-Koa-vue\\node_modules',
     'F:\\project\\node_modules',
     'F:\\node_modules' ] }
```
module.exports 和 exports 是同一个，但是使用上有区别
导出多个数据

* 第一种
module.exports.a = 10
module.exports.b = 100
* 第二种
exports.a = 10
exports.b = 100

// 有问题的（对象值引用的问题，这样等于重新声明一个 exports，没有挂载到module上）
exports = {
    a: 10,
    b: 100,
}
// 没问题的
module.exports = {
    a: 10,
    b: 100,
}
## 模块化 分类
- 文件模块
- 文件夹模块
- 全局文件模块

- 当导入的模块是一个文件夹的时候，就会引入文件夹模块，
1. 读取该文件夹下的package.json文件
2. 导入package.json文件中的main选项指定的文件
3. 如果不存在package.json或者main指定的文件，就默认导入 index.js 文件

[目录作为模块](http://nodejs.cn/api/modules.html#modules_file_modules)

- 如果我们导入的模块是在node_modules目录下，又有另一种规则
开始直接
```js
// let m2 = require ('./node_modules/m2');
let m2 = require ('m2');

console.log (m2);
```
如果是已相对路径 ./  ../ 开始的，那么就是路径模块加载模式
另一种 使用的是 require 其实就是 module.require，
当非路径加载时候，会按照以下规则进行模块查找
  -> 在module对象有一个属性：paths 是一个数组，里面保存的就是这种非路径加载模式需要查找的路径列表

```js
Module {
  id: '.',
  path: 'F:\\新建文件夹\\Node-TS-Koa-vue\\node',
  exports: {},
  parent: null,
  filename: 'F:\\新建文件夹\\Node-TS-Koa-vue\\node\\module.js',
  loaded: false,
  children: [
    Module {
      id: 'F:\\新建文件夹\\Node-TS-Koa-vue\\node\\module2.js',
      path: 'F:\\新建文件夹\\Node-TS-Koa-vue\\node',
      exports: [Object],
      parent: [Circular],
      filename: 'F:\\新建文件夹\\Node-TS-Koa-vue\\node\\module2.js',
      loaded: true,
      children: [],
      paths: [Array]
    }
  ],
  paths: [
    'F:\\新建文件夹\\Node-TS-Koa-vue\\node\\node_modules',
    'F:\\新建文件夹\\Node-TS-Koa-vue\\node_modules',
    'F:\\新建文件夹\\node_modules',
    'F:\\node_modules'
  ]
}
```
查找顺序 就是按照paths 数组路径依次查找，
先查找当前目录下是否有node_modules，即'F:\\新建文件夹\\Node-TS-Koa-vue\\node\\node_modules'
如果没有就查找上一级目录下是否有node_modules，即'F:\\新建文件夹\\Node-TS-Koa-vue\\node_modules',
一直到根目录

第三方文件目录就是这样

- 核心模块
```js
const fs=require('fs')
console.log (fs);
```
如果自己定义的模块与核心模块冲突了，那么默认加载的就是核心模块

# 模块系统
import  export
- .mjs 文件后缀
- 开启 --experimental-modules

# Event 模块
    [events（事件触发器）](http://nodejs.cn/api/events.html#events_events)
    事件是整个node.js的核心，node.js中大部分模块都使用或继承了该模块（类似webApi中的EventTarget）

    - setMaxListeners 默认情况下，如果为特定事件添加了超过 10 个监听器，则 EventEmitter 会打印一个警告。这有助于发现内存泄露
    超出报错`(node:61696) MaxListenersExceededWarning: Possible EventEmitter memory leak detected. 2 event listeners added to [MyEmitter]. Use emitter.setMaxListeners() to increase limit`
    - prependListener 添加 listener 函数到名为 eventName 的事件的监听器数组的开头。
    - addListener emitter.on(eventName, listener) 的别名。

EventTarget -> Node -> Element -> HTMLElement()   

# Process
process 对象是一个全局变量，它提供有关当前 Node.js 进程的信息并对其进行控制。 作为一个全局变量，它始终可供 Node.js 应用程序使用，无需使用 require()。 它也可以使用 require() 显式地访问：
API
- argv  当前运行node程序的相关参数
- env   环境变量
- exit  结束进程
- cwd   当前的工作目录  // F:\新建文件夹\Node-TS-Koa-vue\node
- stdin  
- stdout 输出  write
```js
// argv [node,当前文件，...参数]

[
  'C:\\Program Files\\nodejs\\node.exe',
  'F:\\新建文件夹\\Node-TS-Koa-vue\\node\\process.js'
]

```
```bash
node .\process.js mode=pro
```
```js
// process.cwd()
[
  'C:\\Program Files\\nodejs\\node.exe',
  'F:\\新建文件夹\\Node-TS-Koa-vue\\node\\process.js',
  'mode=pro'
]
```
# Stream
流（stream）是 Node.js 中处理流式数据的抽象接口。 stream 模块用于构建实现了流接口的对象。
Node.js 提供了多种流对象。 例如，HTTP 服务器的请求和 process.stdout 都是流的实例。
流可以是可读的、可写的、或者可读可写的。 所有的流都是 EventEmitter 的实例。
Node.js 中有四种基本的流类型：

- Writable - 可写入数据的流（例如 fs.createWriteStream()）。
- Readable - 可读取数据的流（例如 fs.createReadStream()）。
- Duplex - 可读又可写的流（例如 net.Socket）。
- Transform - 在读写过程中可以修改或转换数据的 Duplex 流（例如 zlib.createDeflate()）。
此外，该模块还包括实用函数 stream.pipeline()、stream.finished() 和 stream.Readable.from()。

# Buffer 
 Buffer 类是作为 Node.js API 的一部分引入的，用于在 TCP 流、文件系统操作、以及其他上下文中与八位字节流进行交互。
 Buffer 类的实例类似于从 0 到 255 之间的整数数组（其他整数会通过 ＆ 255 操作强制转换到此范围），但对应于 V8 堆外部的固定大小的原始内存分配。 Buffer 的大小在创建时确定，且无法更改。

Buffer 类在全局作用域中，因此无需使用 require('buffer').Buffer。
- alloc
- isEncoding 要检查的字符编码名称。 console.log(Buffer.isEncoding('utf-8'));
- isBuffer


# fs（文件系统）
fs 模块提供了一个 API，用于以模仿标准 POSIX 函数的方式与文件系统进行交互。

fs.writeFile(file, data[, options], callback)
// 如果文件不存在，就会创建
// 如果目录不存在，创建文件就会失败

fs.watch(filename[, options][, listener])
fs.open(path[, flags[, mode]], callback)  //打开
fs.read(fd, buffer, offset, length, position, callback) //读取
这里的 fd 是 fs.openSync(path[, flags, mode]) 返回表示文件描述符的整数。同里，其他的API的 fd 也是这样。
```js
const fspromise = require ('fs').promises;
```
异步使用

# First Error
node中一种约定，如果一个回调可能有错误发生，那么约定回调函数的第一个参数专门用来提供错误对象。

# 自动构建 项目文件
- commander    命令行格式化
- chalk        命令行美化，给色
- Inquirer.js  箭头选择

第三方框架
	commander
		命令行开发工具
	chalk
		命令行样式风格控制器
	inquirer
		交互式命令行工具
