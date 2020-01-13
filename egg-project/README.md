# egg-project

demo

## QuickStart

<!-- add docs here for user -->

see [egg docs][egg] for more detail.

### Development

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

### Deploy

```bash
$ npm start
$ npm stop
```

### npm scripts

- Use `npm run lint` to check code style.
- Use `npm test` to run unit test.
- Use `npm run autod` to auto detect dependencies upgrade, see [autod](https://www.npmjs.com/package/autod) for more detail.


[egg]: https://eggjs.org

# [egg.js 项目](https://www.imooc.com/learn/1185)
## [进度](https://www.imooc.com/video/20383)
## [文档地址](https://eggjs.org/zh-cn/intro/quickstart.html)
## 安装
```bash
$ mkdir egg-project1 && cd egg-project1
$ npm init egg --type=simple
$ npm i
```
## 路由
- [路由](https://eggjs.org/zh-cn/basics/router.html)
> Router 主要用来描述请求 URL 和具体承担执行动作的 Controller 的对应> 关系， 框架约定了 app/router.js 文件用于统一所有路由规则。

> 通过统一的配置，我们可以避免路由规则逻辑散落在多个地方，从而出现未> 知的冲突，集中在一起我们可以更方便的来查看全局的路由规则。
> 
1. 在app/controller 目录下面实现 Controller
2. app/router.js 里面定义 URL 路由规则

### 请求方式
1. GET 方式
- ?id=1111   ctx.query
- /45545     ctx.params   
2. POST 方式
- [安全威胁csrf的防范](https://eggjs.org/zh-cn/core/security.html#安全威胁csrf的防范)

#### 开启与关闭配置
注意：除非清楚的确认后果，否则不建议擅自关闭安全插件提供的功能。

框架的安全插件是默认开启的，如果我们想关闭其中一些安全防范，直接设置该项的 enable 属性为 false 即可。例如关闭 xframe 防范：

在 `config/config.default.js` 进行修改
```js
  config.security = {
    csrf: {
      enable: false,
    },
  };
```
3. PUT 方式
4. DELETE

## 服务（Service）
- [地址](https://eggjs.org/zh-cn/basics/service.html)
在 `app/service` 下 新建

```js
//  app/service/product.js
'use strict';
const Service = require('egg').Service;

class ProductService extends Service {
  async index() {
    return {
      id: 'dasdh',
      name: '测试',
    };
  }
}
module.exports = ProductService;
```
在 `controller`下引入
```js
const res = await ctx.service.product.index();
```




