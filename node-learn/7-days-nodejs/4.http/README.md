# 网络操作

http和https模块支持服务端模式和客户端模式两种使用方式。

request和response对象除了用于读写头数据外，都可以当作数据流来操作。

url.parse方法加上request.url属性是处理HTTP请求时的固定搭配。

使用zlib模块可以减少使用HTTP协议时的数据传输量。

通过net模块的Socket服务器与客户端可对HTTP协议做底层操作。
