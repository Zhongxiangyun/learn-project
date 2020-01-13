/**
 * 在node中，tcp 协议，基于 net 模块来实现的
 */
const net = require ('net');
const fs = require ('fs');
/**
 * 创建一个服务器端
 *      1. 监听地址以及端口
 *      2. 处理发送到当前监听地址以及端口的数据
 *      3. 返回（发送）数据到连接的客户端
 * 
 * net.Server 类
 *      new net.Server()
 *      net.createServer()  => return new net.Server()
 */
const server = net.createServer ();

/**
 * function createServer(callback) {
 *  let s = new net.Server();
 *  s.on('connection', callback);
 *  return s;
 * }
 */
// 当有客户端 链接的时候触发
server.on ('connection', socket => {
  // socket =》 当前链接的socket对象
  console.log ('有人链接了');

  let pic = fs.readFileSync ('./client.js');
  //   发送
  socket.write (pic);
  //   socket.write ('你哈');
  //数据发送完
  socket.end ();

  socket.on ('data', data => {
    // socket.write ('我来了',data.toString());
    console.log (data.toString (), socket.remoteAddress, socket.remotePort);
  });
});
/**
 * 监听地址及端口
 */
// * 0.0.0.0  通配 监听本机的所有ip地址
server.listen (12345, '127.0.0.1');
