/**
 * 在node中，tcp 协议，基于 net 模块来实现的
 */
const net = require ('net');
/**
 * 创建客户端 与 udp
 * 
 * 1. new net.Socket([options])
 * 2. net.createConnection()
 */
// 要连接的主机和端口
const clientSocket = net.createConnection (12345, '127.0.0.1');

clientSocket.write('hello');
// 监听数据传输
clientSocket.on ('data', data => {
  console.log ('数据', data.toString ());
//   clientSocket.write('w(ﾟДﾟ)w')
//   clientSocket.write('333,client')
});
// 当数据包接收完成的时候触发
clientSocket.on('end',()=>{
    console.log('数据包 接收完成')
})