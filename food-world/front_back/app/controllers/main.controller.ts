/**
*～╭════╮┌══════════════┐
* ╭╯开车║ ▁▂▃▅▆▇  |  ~~~
* ╰⊙═⊙╯╰══⊙══════⊙══╯
* @description:  控制器 模板
* @author: PresByter
* @date  : 2020/01/06 17:35:14
* @file  : main.controller.ts
* 控制器 是通过 class 来实现的
继承 koa-controller 提供一个装饰器：controller
* 通过这个装饰器我们就可以把一个普通的类变成 具有 控制器特征的控制器类
*/
import { Controller, Get, Ctx, Post } from 'koa-controllers';
import {Context} from 'koa';

@Controller
export class MainController {
    @Get('/')
    public async index(@Ctx ctx: Context){
        // get 来访问
        ctx.body='hello'
    }
    @Post('/')
    public async indexp(@Ctx ctx: Context){
        // get 来访问
        ctx.body='post'
    }
}