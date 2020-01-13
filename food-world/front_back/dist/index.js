"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Koa = require("koa");
var koa_controllers_1 = require("koa-controllers");
var models_1 = __importDefault(require("./models"));
var app = new Koa();
console.log(models_1.default);
koa_controllers_1.useControllers(app, __dirname + '/controllers/**/*.js', {
    multipart: {
        dest: './uploads'
    }
});
app.listen(8888);
//# sourceMappingURL=index.js.map