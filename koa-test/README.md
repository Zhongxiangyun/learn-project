npm i koa

服务器启动文件

const Koa = require('koa');

// 热重载：  supervisor
npm i -g supervisor
// npm i supervisor

supervisor app.js


客户端从发请求到看到内容

服务器：接收到请求(request)-> 处理请求，生成数据 -> 发送数据(response)

Koa: request -> middleware -> response

koa处理了request和response，我们需要做的是注册（编写）middleware

提供了一些好用的API

Application
    Context
        Request
        Response

# Koa
	Koa 是一个新的 web 框架，由 Express 幕后的原班人马打造， 致力于成为 web 应用和 API 开发领域中的一个更小、更富有表现力、更健壮的基石。 通过利用 async 函数，Koa 帮你丢弃回调函数，并有力地增强错误处理。 Koa 并没有捆绑任何中间件， 而是提供了一套优雅的方法，帮助您快速而愉快地编写服务端应用程序。
	- [Koa](https://www.koajs.com.cn/)
	- [Koa](https://koa.bootcss.com/)
	- [Koa -github ](https://github.com/demopark/koa-docs-Zh-CN)
    安装
		npm i koa
	载入
		const koa = require('koa')
		const app = new koa()
		app.listen(80)
	响应输出
		app.use(async ctx => {ctx.body = 'Hello'})
    Application
		当前应用程序对象，即 new Koa() 得到的实例对象，保存了应用全局状态以及其他对象，后面的Context、Reqeust、Response对象都是该对象下的子对象
		- .listen()
		- .use(callback)
    中间件
		- .use(callback)
		- callback(context, next)
		- context 对象
			每一次请求都会包装一个context对象
		- next
			每一个中间件都是一个迭代器
		- 异步中间件
			.use(async callback)    
    错误处理
		- app.on('error', err => {})
    context 对象
		每一次请求都会包装一个 context 对象
		该对象对 node 的 request 和 response 对象进行了封装（加强了node中的request和response）
		同时提供了其他一些有用的 api
		koa 会把 context 传入到中间件函数的第一个参数中
		可以对context进行扩展，并在中间件中使用
    context 对象
		- .req：Node 的 request 对象
		- .res：Node 的 response 对象
		注意：在 Koa 中尽量使用Koa提供的封装对象
		- .request：Koa 的 request 对象
		- .response：Koa 的 response 对象
		- .state：用户数据存储空间
		- .app：当前应用程序实例 - Application 对象
		- .cookies 对象
			- .get(name, [options])
			- .set(name, value, [options])
			- options
				- .maxAge	- .signed
				- .expires	- .path
				- .domain	- .secure
				- .httpOnly	- .overwrite
		- .throw([status][, msg][, properties])
			抛出一个错误，Koa 会进行处理（比如返回对应的响应信息）
			在app.on('error')事件中可以捕获到该异常，error 参数中也会保存msg和properties
    request 对象
		注：在 Koa 中，request 对象是 Context 对象下的一个属性，为了方便调用 request 对象下的一些常用属性与方法同时在 Context 下有对应的挂载，也就是 Context 下的一些属性与方法等同于 request 对象下的对应属性和方法，response也是如此
    
		- .header：头信息对象，别名：headers
		- .header=：设置头信息，别名：headrs=
		- .method：请求方法
		- .method=：设置请求方法
		- .length：请求正文内容长度
		- .url：请求URL
		- .url=：设置请求URL，不包含协议与主机部分
		- .orginalURL：原始URL，不包含协议与主机部分
    
		- .href：原始完整URL，包含协议、主机、请求串
		- .path：URL路径部分
		- .path=：设置URL路径
		- .querystring：URL中的querystring
		- .querystring=：设置URL中的querystring
		- .search：URL中的search，带 ? 的querystring
		- .search=：设置URL中的search
    
		- .host：请求头中的host
		- .hostname：请求头中的hostname
		- .URL：解析过的URL对象
		- .type：请求头中 content-type
		- .charset：请求头中的charset
		- .query：解析过的querystring对象
		- .query=：设置querystring对象值
    
		- .fresh：判断缓存设置时候有效，true表示有效
		- .stale：与fresh相反
		- protocol：请求使用的协议
		- .secure：是否是安全协议，protocol=='https'
		- .ip：请求客户端 IP
		- .ips：请求客户端所有 IP（比如使用了代理等）
		- .subdomains：子域名数组
		- .is(types...)：判断提交内容的MIME类型
    
		- .socket：request.socket对象
		- .get(field)：获取请求头的通用方法
    response 对象
		- .header：响应头对象
		- .headers：header的别名
		- .socket：response.socket对象
		- .status：响应状态码
		- .status=：设置响应状态码
		- .message：响应状态码描述文本
		- .message=：设置响应状态码描述文本
    
		- .body：响应内容
		- .body=：设置响应内容，如果status没有设置，Koa会默认设置status为：200 或者 204，同时 Koa 会根据返回的数据类型自动设置 content-type
			- string：text/html 或 text/plain
			- buffer/Stream：application/octet-stream
			- object：application/json
    
		- .body：响应内容
		- .body=：设置响应内容，如果status没有设置，Koa会默认设置status为：200 或者 204，同时 Koa 会根据返回的数据类型自动设置 content-type
			- string：text/html 或 text/plain
			- buffer/Stream：application/octet-stream
			- object：application/json
    
		- .length：响应内容长度
		- .length=：设置响应内容长度
		- .get(field)：获取指定头信息
		- .get(fields)：批量设置头信息
		- .set(field)：设置指定头信息
		- .append(field, value)：追加头信息
		- .remove(field)：移除头信息
    
		- .type：获取 content-type
		- .type=：设置 content-type
		- .is(types...)：判断 content-type
    
		- .redirect(url)：重定向，默认重定向状态码为：302，可以通过status进行设置
		- .attachment([filename])：设置下载文件头，filename为下载文件的名称
    中间件
		- koa-static-cache：静态文件代理服务
		- koa-router：路由
		- koa-swig：模板引擎
		- koa-bodyparser：body解析
		- koa-multer：formData解析

koa-static-cache：静态文件代理服务
	使用
		const koaStaticCache = require('koa-static-cache')
		staticCache(dir [, options] [, files])
			- dir：服务器上存放静态资源的目录
			- options：选项设置
			- files：合并的文件对象
    选项设置
		- prefix：URL前缀，默认是 '.'
		- maxAge：缓存时间，单位毫秒，默认为0
		- gzip：启用gzip压缩传输，默认为true        
koa-router：路由
	使用
		const Router = require('koa-router')
		const router = new Router()
    路由设置
		- RESTful
			representational state transfer(表象性状态转变)
		- URL
			统一资源定位符
    - 非RESTful的url设计
		http://127.0.0.1/user/add 新增用户
		http://127.0.0.1/user/query/1 查询用户
		http://127.0.0.1/user/delete/1 删除用户
	- 问题
		URL反映的是资源的位置，不应该带有操作，换句话说，对资源的操作不应该改变资源的定位
    路由设置
		- RESTful的url设计
			使用 http 中的 method 来表述动作
		- RESTful风格的url
			POST：http://127.0.0.1/user 新增用户
			GET：http://127.0.0.1/user/1 查询用户
			DELETE：http://127.0.0.1/user/1 删除用户
    - HTTP 中的 method
		- GET：用来获取资源
		- POST：新建资源
		- PUT：更新资源
		- DELETE：删除资源
koa-router：路由
	RESTful 风格路由设计
		- .get|put|post|patch|delete|del|all
	实例
		router.get( '/', (ctx, next) => {} )
		- 通过 get 方法访问 '/' 的时候执行注册的函数    

		- 给应用注册指定的路由中间件
			- .use([path], middleware)
			- app.use(router.routes())
		- 命名路由
			- router.get('main', '/', cb);
		- 复合中间件
			- router.get('/', cb1, cb2, cb3...)
				- 注意调用中间件的next函数
        - 嵌套路由
			const parent = new Router()
			const child = new Router()
			parent.use('/p', child.routes())
		- 路由前缀
			const router = new Router({
				prefix: '/user'
			})
        - 动态路由
			router.get('/user/:id', cb);
			动态路由参数通过 ctx.params 对象获取
		- 路由重定向
			router.redirect('/user', '/login', 301)
		- URL生成器
			Router.url('/list', {page:1}, {query{order:'desc'}}) 生成：/list/1?order=desc
koa-swig：模板引擎
	安装使用
		npm i koa-swig
		const Swig = require('koa-swig')
		const render = Swig(options)
	加载 co 模块
		koa v2.x 需要使用 co 函数
		npm i co
		const co = require('co')            
    把渲染方法挂载到 Context 下
		app.context.render = co.wrap( render(opts) )		opts:
			- root: 模板存放目录
			- autoescape：是否自动 escape 编码
			- cache：是否启用缓存
			- ext：模板后缀，'html'
    render & data
		ctx.body = await ctx.render(模板文件, 数据)
    模板语法
		输出：{{表达式}}
		判断
			{% if 条件 %}{% endif %}
			{% if 条件 %}{%elseif 条件%}{% endif %}
			{% if 条件 %} {%else%}{% endif %}
		循环
			{% for x in y %}{% endfor %}
			{%for key, val in data%}
			内置变量
				loop.index：从1计算
				loop.index0：从0计算
				loop.length：长度
		继承
			{% extends "base.html" %}
			{% block name %}{% endblock %}
				类似类的方法，子模板可以重写
        包含导入
			{% include 'widget.html' %}
		变量设置与传参
			{% set name = 'zMouse' %}
			{% include 'widget.html' with name %}
			在使用 include 的模板中可以使用 name


       