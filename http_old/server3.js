const http = require ('http');
const url = require ('url');
// http://nodejs.cn/api/fs.html
const fs = require ('fs');
// http://nodejs.cn/api/querystring.html
const querystring = require ('querystring');

const server = http.createServer ();

const htmlDir = __dirname + '/template/';
server.on ('request', (req, res) => {
  const urls = url.parse (req.url);

  switch (urls.pathname) {
    case '/':
      //   res.writeHead (200, {
      //     'Content-Type': 'text/html;charset=utf-8',
      //   });
      //   res.end ('<h1>我是首页</h1>');
      sendData (htmlDir + 'index.html', req, res);
      break;
    case '/user':
      sendData (htmlDir + 'user.html', req, res);

      break;
    case '/login':
      sendData (htmlDir + 'login.html', req, res);
      break;
    case '/login/check':
      // get
      console.log (req.method);
      console.log (urls);
      console.log (querystring.parse (urls.query));
      //   post
      let str = '';

      req.on ('data', chunk => {
        str += chunk;
      });

      req.on ('end', () => {
        console.log (str);
        console.log (querystring.parse (str));
      });
      break;
    default:
      res.writeHead (404, {
        'Content-Type': 'text/html;charset=utf-8',
      });
      res.end ('<h1>404</h1>');
      break;
  }
});

function sendData (file, req, res) {
  fs.readFile (file, (err, data) => {
    if (err) {
      res.writeHead (404, {
        'Content-Type': 'text/html;charset=utf-8',
      });
      res.end ('<h1>404</h1>');
    } else {
      res.writeHead (200, {
        'Content-Type': 'text/html;charset=utf-8',
      });
      res.end (data);
    }
  });
}
// http://nodejs.cn/api/net.html#net_server_listen
//                端口  主机/ip 链接等待队列最大长度  回调函数
// server.listen([port[, host[, backlog]]][, callback]) 用于 TCP 服务器
server.listen (8088, 'localhost', () => {
  console.log ('listening...');
});
