/**
*～╭════╮┌══════════════┐
* ╭╯开车║ ▁▂▃▅▆▇  |  ~~~
* ╰⊙═⊙╯╰══⊙══════⊙══╯
* @description:  测试js
* @author: PresByter
* @date  : 2020/01/11 16:28:29
* @file  : product.js
*/
'use strict';

const Controller = require('egg').Controller;

class ProductController extends Controller {
  async index() {
    const { ctx } = this;
    // 使用服务
    const res = await ctx.service.product.index();
    ctx.body = res;
  }
  async detail() {
    const { ctx } = this;
    // console.log(ctx.query);

    ctx.body = 'hi, ProductController detail' + ctx.query.id;
  }
  async detail2() {
    const { ctx } = this;
    // console.log(ctx.params);

    ctx.body = 'hi, detail2 ' + ctx.params.id;
  }

  async create() {
    const { ctx } = this;
    console.log(ctx.request.body);

    const { id, name } = ctx.request.body;
    ctx.body = {
      id, name,
    };
  }
  async update() {
    const { ctx } = this;
    console.log(ctx.params);
    const { id, name } = ctx.params;
    ctx.body = {
      id, name,
    };
  }
  async delete() {
    const { ctx } = this;
    console.log(ctx.params);
    const { id, name } = ctx.params;
    ctx.body = {
      id, name,
    };
  }
}

module.exports = ProductController;
