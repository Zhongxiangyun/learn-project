/**
*～╭════╮┌══════════════┐
* ╭╯开车║ ▁▂▃▅▆▇  |  ~~~
* ╰⊙═⊙╯╰══⊙══════⊙══╯
* @description:  service 链接数据库
* @author: PresByter
* @date  : 2020/01/13 18:22:16
* @file  : article.js
*/

'use strict';
const Service = require('egg').Service;

class ArticleService extends Service {
  async create(params) {
    const { app } = this;
    try {
      const res = await app.mysql.insert('article', params);
      return res;
    //   await conn.insert(table, row1); // 第一步操作
    //   await conn.update(table, row2); // 第二步操作
    //   await conn.commit(); // 提交事务
    } catch (err) {
      // error, rollback
    //   await conn.rollback(); // 一定记得捕获异常后回滚事务！！
      throw err;
    }
  }
  async lists() {
    const { app } = this;
    try {
      const res = await app.mysql.select('article');
      return res;
    } catch (error) {
      throw error;
    }
  }
  async detail(id) {
    if (!id) {
      return null;
    }
    const { app } = this;
    try {
      const res = await app.mysql.get('article', { id });
      return res;
    } catch (error) {
      throw error;
    }
  }
}
module.exports = ArticleService;
