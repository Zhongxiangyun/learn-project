/**
 * @description: 你这个小猪怎么还不请我吃饭（´・ω・） 
 * @author: PresByter
 * @date  : 2020/01/06 15:15:52
 * @file  : index.ts
 */
/**
 * https://www.tslang.cn/docs/handbook/modules.html
 * 由于 在ts 下 ，模块系统不同于 node ，所以这里需要注意一下 ，也就是 koa 不是使用ts所写。 会有提示
 * 
 * 无法找到模块“koa”的声明文件。“f:/my-github/Node-TS-Koa-vue/food-world/front_back/node_modules/koa/lib/application.js”隐式拥有 "any" 类型。
  Try `npm install @types/koa` if it exists or add a new declaration (.d.ts) file containing `declare module 'koa';
 */
// import * as Koa from 'koa'
import Koa = require('koa');
import { useControllers } from 'koa-controllers';

import db from './models'
let app = new Koa();

// app.use(async (ctx: { body: string; }) => {
//     ctx.body = 'hello presbyter@@@@222-';
// });

console.log(db);

useControllers(app, __dirname + '/controllers/**/*.js', {
    multipart: {
        dest: './uploads'
    }
});

app.listen(8888);