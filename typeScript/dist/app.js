import * as Koa from "koa";
import "reflect-metadata";
import { useControllers } from 'koa-controllers';
var app = new Koa();
useControllers(app, __dirname + '/controllers/*.ts', {
    multipart: {
        dest: './uploads'
    }
});
app.listen(80);
