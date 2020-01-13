const http = require ('http');

/**
 * http.Server 类
 *  new http.Server()
 *  http.createServer()
 */

const server = http.createServer ();

server.on('listening',()=>{
    console.log('有请求')
})
//  80 默认， 给http使用
server.listen (80,'0.0.0.0');
