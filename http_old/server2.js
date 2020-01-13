// http://nodejs.cn/api/http.html
const http = require ('http');

// http://nodejs.cn/api/url.html
const url = require ('url');
// http://nodejs.cn/api/http.html#http_http_createserver_options_requestlistener
// http.createServer([options][, requestListener])
const server = http.createServer ();

server.on ('request', (req, res) => {
  const urls = url.parse (req.url);
  console.log (urls);
  //   Url {
  //     protocol: null,
  //     slashes: null,
  //     auth: null,
  //     host: null,
  //     port: null,
  //     hostname: null,
  //     hash: null,
  //     search: null,
  //     query: null,
  //     pathname: '/das',
  //     path: '/das',
  //     href: '/das'
  //   }
  switch (urls.pathname) {
    case '/':
      res.writeHead (200, {
        'Content-Type': 'text/html;charset=utf-8',
      });
      res.end ('<h1>我是首页</h1>');
      break;
    case '/user':
      res.writeHead (200, {
        'Content-Type': 'text/html;charset=utf-8',
      });
      res.end ('<h1>我是个人</h1>');
      break;
    default:
      res.writeHead (404, {
        'Content-Type': 'text/html;charset=utf-8',
      });
      res.end ('<h1>404</h1>');
      break;
  }
});
// http://nodejs.cn/api/net.html#net_server_listen
//                端口  主机/ip 链接等待队列最大长度  回调函数
// server.listen([port[, host[, backlog]]][, callback]) 用于 TCP 服务器
server.listen (8088, 'localhost', () => {
  console.log ('listening...');
});
