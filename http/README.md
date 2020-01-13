ip
    规定了互联的计算机之间定位规则

tcp
    规定了互联的计算机通过ip定位以后，发送数据的规则
    端口

    ip -> 定位主机
    端口 -> 软件，应用

    在数据发送过程除了有具体发送的数据，还有会一些其他的额外数据
    比如：接收和发送者的ip、端口，为了能够让接收数据的一方能够按照这些数据反馈信息给对方

    同时在发送过程数据还有按照一定规则进行打包，比如会把大的数据按照一定的规则打包一个一个
    小数据包，每个数据包中都包含如上的一些信息

    A->B
    A发送的数据：'abcdefg123456'
    {192.168.1.36|7777|abcdefg}->{192.168.1.36|7777|123456}

在实际应用中，不同的软件可能都会用到这样的方式来传递数据，不过，可能在具体数据组织上
会有不同的个性的设置，所以不同的应用程序会对发送的数据进行自己的二次包装(TCP)，形成各式各样
的其他传输协议：HTTP\FTP\MAIL

'sss@miaov.com,bbbb@miaov.com,标题,内容,附件'
{192.168.1.36|7777|{from:'',to:'',content:'',titie:'',attachment:''}}

=> MAIL协议

http:传输ht(超文本)这样的文本的规则


- 规定了请求发送的数据格式
    Request Line：请求行
    Request header：请求头
    Request body：请求正文
    
- 规定了返回的数据的格式
- 传输的规则

# HTTP
[HTTP](http://nodejs.cn/api/http.html)

	HTTP的结构
	HTTP是一个基于TCP/IP通信协议来传输（超文本）数据

	- HTTP是基于TCP/IP协议来定位传输数据
	- 同时在TCP/IP包基础上对要传输的数据进行再次包装
	- HTTP是单向单链接、无状态协议

	[各标准网址 https://ietf.org](https://ietf.org)
    http 模块
            require('http')
        http.Server 类
            const server = new http.server()
            const server = http.createServer([options][, requestListener])
                该类继承自 net.server，http基于tcp
        监听
            server.listen([port][, host])
    Request - 请求
	http.ClientRequest 类
		const client = new http.ClientRequest()
		const client = http.request(options[, callback])
    http.clientRequest - options
		protocol : 使用的协议。默认为 http:
		host : 请求发送至的服务器的域名或 IP 地址。默认为 localhost
		family : 当解析 host 和 hostname 时使用的 IP 地址族时有效，值是 4 或 6，未指定时，则同时使用 IP v4 和 v6
		port : 远程服务器的端口。默认为 80
		method : 指定 HTTP 请求方法的字符串。默认为 'GET'
    http.clientRequest - options
		path : 请求的路径。默认为 '/'。 应包括查询字符串（如有的话）。如 '/index.html?page=12'
		headers : 包含请求头的对象
HTTP基于请求方向，分为：
		- 请求 : Request
		- 响应 : Response
	HTTP对Request和Response的数据格式进行规定以及包装
    Request 消息分为三个部分：
		- Request Line：请求行
		- Request header：请求头
		- Request body：请求正文
    Request Line - 请求行：
		- Method：表示请求方式，比如“get”、“post”，“put”……，不同的请求方式所得到的结果也有不一样
		- Path-to-resoure：请求资源，也就是 URL，URL的作用是用来定位我们想要获取的内容在网络的位置，它也有一套规则
		- Http/version-number：表示当前所使用的HTTP协议的版本，主流为1.1，最新为2.0 
# URL
	Uniform Resource Locator : 统一资源定位符，是对可以从互联网上得到的资源的位置和访问方法的一种简洁的表示，是互联网上标准资源的地址
	格式
		protocol://hostname[:port]/path/ [?query]#fragment     
    protocol（协议）
		指定使用的传输协议
			- http 通过 HTTP 访问该资源。 格式 HTTP://
			- https 通过安全的 HTTPS 访问该资源。 格式 HTTPS://
			- ftp 通过 FTP访问资源。格式 FTP://			- file 资源是本地计算机上的文件。格式file:///，注意后边应是三个斜杠。
    hostname（主机名）
		是指存放资源的服务器的域名系统(DNS) 主机名或 IP 地址。有时，在主机名前也可以包含连接到服务器所需的用户名和密码（格式：username:password@hostname）
		www.miaov.com               
    port（端口号）
		各种传输协议都有默认的端口号，如http的默认端口为80。如果输入时省略，则使用默认端口号。有时候出于安全或其他考虑，可以在服务器上对端口进行重定义，即采用非标准端口号，此时，URL中就不能省略端口号这一项。
		www.miaov.com:80
    path（路径）
		由零或多个“/”符号隔开的字符串，一般用来表示主机上的一个目录或文件地址（有时候也是一个虚拟目录或文件地址）。
		/news/detail/20180831.html
    query(查询)
		也称为queryString（查询字符串），用户资源定位时传入的参数，使用=组成的名值对，多个名值对使用&连接
		http://www.miaov.com：80/new/list?order=desc&page=2
	fragment（信息片断）
		也称为hash，用户定位资源中某个内容片断（锚点）
		http://www.miaov.com:80/index.html?page=1#news
	url模块 - node
		url 模块提供了一些实用函数，用于 URL 处理与解析
		http://nodejs.cn/api/url.html
	
# HTTP
	Request Header - 请求头：
		 有的时候请求者可能会需要传给的接收者一些实体内容以外的信息（比如当前发送请求的载体-浏览器），那么这些信息就可以通过请求头进行包装，请求头中可以包含若干条数据，每条数据使用 属性:值 这样的键值对形式进行组织，HTTP协议同时也约定了若干不同的头信息以及对应的含义，服务端可以根据得到的头信息做不同的处理
	https://en.wikipedia.org/wiki/List_of_HTTP_header_fields
	Request Header - 请求头：
		 Accept
			告诉服务端，客户端接收什么类型的数据
			Accept: text/html,image/apng,*/*
		Cache-Control
			对返回的内容进行缓存控制，是否缓存，缓存多久
			Cache-Control: no-cache
	Request Body - 请求体：
		 发送的具体正文内容
	Response 消息分为三个部分：
		- Response Line：响应行
		- Response header：响应头
		- Response body：响应正文
	Response Line - 响应行：
		-  HTTP/version-number：表示HTTP协议的版本号
		- status-code：状态码
		- message：状态码对应的描述
	Response Line - 响应头：
		同请求头，服务端在返回一些主要数据之外，还会返回一些额外的数据，这些数据都包装的响应头部分，客户端会根据接收到的响应头以及头信息中对应的字段来做出不同的解析行为
	Response Line - 响应正文：
		返回的具体内容
	消息头
		HTTP 消息头允许客户端和服务器通过 request和 response传递附加信息。一个请求头由名称（不区分大小写）后跟一个冒号“：”，冒号后跟具体的值（不带换行符）组成。该值前面的引导空白会被忽略
		自定专用消息头可通过'X-' 前缀来添加；
		https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers
	消息头
		根据不同上下文，可将消息头分为：
			一般头: 同时适用于请求和响应消息，但与最终消息主体中传输的数据无关的消息头。
			请求头: 包含更多有关要获取的资源或客户端本身信息的消息头。
			响应头: 包含有关响应的补充信息，如其位置或服务器本身（名称和版本等）的消息头。
			实体头: 包含有关实体主体的更多信息，比如主体长(Content-Length)度或其MIME类型。
	消息头
		Content-Type<实体首部>：发送内容类型
		Content-Length<实体首部>：发送内容长度
		Location<响应首部>：重定向地址
		Cookie<请求首部>：包含要发送给服务器的Cookie
		Set-Cookie<响应首部>：服务器端向客户端发送 cookie
	状态码
		有的时候，客户端是无法通过返回的内容来判断是否是预期数据，状态码就是用来告诉客户端，服务器是否产生了预期的响应
		客户端（浏览器）也会根据不同的状态码做出不一样的后续处理
	状态码分类：
		https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status
		HTTP/1.1中定义了5类状态码， 状态码由三位数字组成，第一个数字定义了响应的类别
		1XX  提示信息 - 表示请求已被成功接收，继续处理
		2XX  成功 - 表示请求已被成功接收，理解，接受
		3XX  重定向 - 要完成请求必须进行更进一步的处理
		4XX  客户端错误 -  请求有语法错误或请求无法实现
		5XX  服务器端错误 -   服务器未能实现合法的请求
# querystring
	querystring模块 - node
		querystring 模块提供了一些实用函数，用于解析与格式化 URL 查询字符串
		http://nodejs.cn/api/querystring.html
# web Server
	- http模块：监听请求
		- Reqeust对象：获取请求数据信息
		- Response对象：响应反馈
	- url模块：分析处理 url
	- queryString模块：处理提交数据
	- stream模块：处理body提交数据
	- path模块：本地文件路径处理
	- fs模块：文件资源处理模块			 			
        