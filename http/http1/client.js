const fs = require ('fs');
const http = require ('http');
/**
 * http://nodejs.cn/api/http.html#http_class_http_clientrequest
 * http.ClientRequest 类
 * new http.ClientRequest()
 * http.request(options[, callback])
 */
// // 创建一个客户端（能发http请求）的对象
// 请求行:    get http://127.0.0.1:80/ http/1.1
const client = http.request (
  {
    // tcp
    // host: '127.0.0.1',
    host: 'www.baidu.com',
    port: 80,
    // http
    protocol: 'http:',
    method: 'get',
    path: '/img/bd_logo1.png',
  },
  res => {
    // 这个函数 会在服务器响应的时候触发
    console.log (res);
    let content = '';
    // 当图片,mp3,等的时候 ，不能使用字符串 ，需要使用buffer 对象
    let img = Buffer.alloc (0);
    // res=>socket
    res.on ('data', data => {
      // console.log (data.toString ());
      // content += data.toString ();
      img = Buffer.concat ([img, data], img.length + data.length);
    });
    res.on ('end', () => {
      // fs.writeFileSync ('./baidu.html',content);
      fs.writeFileSync ('./baidu.png', img);
    });
  }
);
// 请求的发送需要调用下面的方法
client.write ('');
client.end ();
