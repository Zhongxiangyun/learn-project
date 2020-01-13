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
    const { ctx, app } = this;
    const res = await ctx.service.product.index();
    const res1 = await app.mysql.get('article');
    console.log(res1);
    // ctx.body = res;
    await ctx.render('index.html', { res, list: [ 1, 2, 3, 6, 5 ] });
  }
}

module.exports = HomeController;
