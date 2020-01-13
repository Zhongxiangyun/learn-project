/**
*～╭════╮┌══════════════┐
* ╭╯开车║ ▁▂▃▅▆▇  |  ~~~
* ╰⊙═⊙╯╰══⊙══════⊙══╯
* @description: egg初识
* @author: PresByter
* @date  : 2020/01/11 16:21:46
* @file  : home.js
*/

'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    // ctx.body = 'hi, egg111';
    const res = await ctx.service.product.index();
    ctx.body = res;
  }
}

module.exports = HomeController;
