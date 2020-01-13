# 安装
 1. npm i sequelize-cli sequelize mysql2 @vue/cli
 2. 初始化
Node-TS-Koa-vue\app-blog\server> ..\node_modules\.bin\sequelize init

3. 建立对象模型
..\node_modules\.bin\sequelize model:create --name Users --attributes username:STRING
4. 建立数据库
 ..\node_modules\.bin\sequelize db:create
5. 迁移命令 
..\node_modules\.bin\sequelize db:migrate
6. 安装 密码 加密
npm i md5
7. 迁移种子
..\node_modules\.bin\sequelize db:seed:all
8. 安装 koa 依赖
npm i koa koa-static-cache koa-router koa-bodyparser



# bug
### DeprecationWarning: A boolean value was passed to options.operatorsAliases. This is a no-op with v5 and should be removed.
 去掉 config/config.json 里面的  "operatorsAliases": false

## koa-session
[https://www.npmjs.com/package/koa-session](https://www.npmjs.com/package/koa-session) 