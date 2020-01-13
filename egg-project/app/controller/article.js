'use strict';
/**
*～╭════╮┌══════════════┐
* ╭╯开车║ ▁▂▃▅▆▇  |  ~~~
* ╰⊙═⊙╯╰══⊙══════⊙══╯
* @description: 文章
* @author: PresByter
* @date  : 2020/01/13 18:03:25
* @file  : article.js
*/
const moment = require('moment');
const Controller = require('egg').Controller;

class ArticleController extends Controller {
  async create() {
    const { ctx } = this;
    // 使用服务
    const res = await ctx.service.article.create({
      ...ctx.request.body,
      createTime: moment().format('YYYY-MM-DD HH:mm:ss'),
      updateTime: moment().format('YYYY-MM-DD HH:mm:ss'),
    });
    if (res) {

      ctx.body = {
        status: 200,
        data: res,
      };
    } else {

      ctx.body = {
        status: 500,
        data: 'res',
      };
    }
  }
  async lists() {
    const { ctx } = this;
    const res = await ctx.service.article.lists();
    if (res) {
      ctx.body = {
        status: 200,
        data: res,
      };
    } else {
      ctx.body = {
        status: 500,
        data: '查询失败',
      };
    }
  }
  async detail() {
    const { ctx } = this;
    const res = await ctx.service.article.detail(ctx.params.id);
    if (res) {
      ctx.body = {
        status: 200,
        data: res,
      };
    } else {
      ctx.body = {
        status: 500,
        data: '查询失败',
      };
    }
  }
}
module.exports = ArticleController;
