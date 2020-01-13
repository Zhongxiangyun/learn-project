# 数据传输协议
	有了网络定位协议，然后再需要做的是定义和选择一个数据的传输协议了
	- TCP
		- 可靠的、面向连接的协议、传输效率低
		- 效率要求相对低，但对准确性要求相对高的场景
		- 文件传输、接受邮件、远程登录
	- UDP
		- 不可靠的、无连接的服务、传输效率高
		-效率要求相对高，对准确性要求相对低的场景
		- 在线视频、网络语音电话

## dgram (数据报)
[dgram (数据报)](http://nodejs.cn/api/dgram.html)
	dgram模块提供了 UDP 数据包 socket 的实现
		socket又称"套接字"，应用程序通常通过"套接字"向网络发出请求或者应答网络请求，其本质上就是一套用于实现网络数据交换的接口（API）
	
	使用
		const dgram = require('dgram')
        dgram.Socket 类

	创建一个特定 type 的dgram.Socket 对象
		const server = new dgram.Socket()
		cosnt server = dgram.createSocket(type[, callback])
			type: 'udp4' 或 'udp6'
    绑定（监听）端口
		server.bind([port][, address][, callback])
			prot: 未指定则由系统分配
			address: 默认 0.0.0.0，表示所有地址/IP
			callback: 绑定成功后的回调
	关闭服务
		server.close()
    事件
		- close
		- error
		- listening
		- message
    发送数据
		server.send(msg, port, [address])
			msg: 发送的数据（字符串/Buffer）
	关闭服务
		server.close()

# Net 模块（TCP）
[Net 模块（TCP）](http://nodejs.cn/api/net.html)
	net 模块提供了创建基于流的 TCP 或 IPC 服务器(net.createServer())和客户端(net.createConnection()) 的异步网络 API
	使用
		require('net')
	
		- 服务端：提供服务，被连接，被请求的一方
		- 客户端：获取服务，发起连接，请求的一方
    net.Server 类
	创建服务端对象
		const server = new net.Server()
		const server = net.createServer([port[, host]])
	监听端口，处理请求
		server.listen(端口, [ip])
			端口：
			ip：默认为0.0.0.0，表示所有
    TCP：先连接，后传输
	net.Socket 类
	创建客户端端对象
		const socket = new net.Socket()
		const socket = net.createConnection(port[, host][, connectListener])

    net.Socket 类
		write(data[, encoding][, callback])
			在 socket 上发送数据。第二个参数制定了字符串的编码 - 默认是 UTF8 编码
		end([data][, encoding])
			半关闭 socket。例如发送一个 FIN 包。服务端仍可以发送数据
			如果指定了 data，则相当于调用 socket.write(data, encoding) 之后再调用 socket.end()
    事件
		net.Server 类
			- listening
			- error
			- connection
				函数的第一个参数是一个net.Socket实例对象，数据的传输就是通过socket对象来实现
			- close
		net.Socket 类
			- connect
			- error
			- data
			- end
    数据包
		在数据传输过程中不仅仅只有主体数据（你要发送的主要内容），还包括了一些其他的数据信息，比如发送端的IP、端口等，以方便接受者对数据进行处理与回复
		如果发送的数据比较大的话，还会对发送的数据进行分包，每一个包中包含有一部分主体数据以及上面提到的额外信息，接收方在接收到数据以后会数据包进行整合等一系列操作
		这种传输规则就是数据传输协议中的规定，不同的协议对传输规则有不同的规定
    属性
		socket.remoteAddress
		socket.remotePort
    数据传输协议
		内容
		格式
		结构组织
		解析规则
		传输规则


        


		
    
