/**
*～╭════╮┌══════════════┐
* ╭╯开车║ ▁▂▃▅▆▇  |  ~~~
* ╰⊙═⊙╯╰══⊙══════⊙══╯
* @description:service 链接数据库
* @author: PresByter
* @date  : 2020/01/11 17:11:15
* @file  : product.js
*/
'use strict';
const Service = require('egg').Service;

class ProductService extends Service {
  async index() {
    return {
      id: 'dasdh',
      name: '测试',
    };
  }
}
module.exports = ProductService;
