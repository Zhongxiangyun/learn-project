const dgram = require('dgram');

const clientSocket = dgram.createSocket('udp4');

/**
 * 发送数据
 *      UDP，无连接协议，不需要连接到服务器，然后再发数据
 * http://nodejs.cn/api/dgram.html#dgram_socket_send_msg_offset_length_port_address_callback
 */

clientSocket.send('hello', 12345, '127.0.0.1');