const http = require ('http');
// http://nodejs.cn/api/http.html#http_http_createserver_options_requestlistener
// http.createServer([options][, requestListener])
const server = http.createServer ();

// http://nodejs.cn/api/net.html#net_server_listen
//                端口  主机/ip 链接等待队列最大长度  回调函数
// server.listen([port[, host[, backlog]]][, callback]) 用于 TCP 服务器
server.listen (8088, 'localhost', () => {
  console.log ('listening...');
});

server.on ('error', err => {
  console.log (err);
});

server.on ('listening', err => {
  console.log (err);
});
/**
 * http://nodejs.cn/api/http.html#http_request_write_chunk_encoding_callback
 * request.write(chunk[, encoding][, callback])
 * 
 * http://nodejs.cn/api/http.html#http_response_end_data_encoding_callback
 * response.end([data[, encoding]][, callback])
 * 
 * http://nodejs.cn/api/http.html#http_response_writehead_statuscode_statusmessage_headers
 * response.writeHead(statusCode[, statusMessage][, headers])
 * 
 * response.setHeader(name, value)
 */
server.on ('request', (req, res) => {
  console.log ('有请求了...');
  //   console.log (req.headers, res);
  res.setHeader('test', 'textdata');

  res.writeHead (200, 'header', {'Content-Type': 'text/html;charset=utf-8'});

  res.write ('<h1>我是首页</h1>', 'utf8');
  //   res.write ('<h1>hell0</h1>','utf8');
  res.end ('ok');
});
console.log (server.address ());
// { address: '::', family: 'IPv6', port: 9676 }
