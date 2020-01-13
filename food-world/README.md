# 设计数据库结构

### sequelize 库

需要安装下面两个模块

- sequelize : 供程序使用
- sequelize-cli : 供命令行使用的工具

##### 初始化

> sequelize init

初始化以后会生成：

- config : 配置目录
- migrations : 迁移文件（数据库表结构）
- seeders : 种子文件（生成测试数据）

- models : 模型文件（sequelize命令工具使用不多，主要是给程序使用）

##### 创建数据库

> npm i mysql2 -S
> sequelize db:create

##### 构建数据迁移结构
- [migrations](https://sequelize.org/v5/manual/migrations.html)
> sequelize migration:create --name [迁移文件的名称]

```bash
$ npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string
```
### 数据库结构

- user : 用户表

用来存放用户基本信息（用户名、密码等）

- user-profile : 用户扩展信息

用来存放用户扩展信息的（性别、昵称、真实姓名、生日等）

- login-log : 用户登录日志

用来存放用户登录日志，用户每一次登录时间和登录IP等信息可以存放在这里

- category : 美食分类

用来存放美食相关的分类信息

- cookbook : 美食信息

用来存放具体的美食信息（标题、图片等）

- step : 美食烹饪步骤

用来存放美食具体步骤，在每个具体的步骤中有一个字段与cookbook表的id进行关联

- comment : 评论

用来存放用户对某个具体的cookbook的评论

- favorite : 搜藏

用来存放用户收藏的美食

### 生成 表 结构

```bash
.\node_modules\.bin\sequelize db:migrate
```
### 添加测试数据

```bash
.\node_modules\.bin\sequelize db:seed:all
```

tsc --init

# koa

npm i koa
在 ts 中使用 koa 需要安装 @types/koa ，即koa的声明文件
npm install @types/koa

#### 监听 ts 文件转换成 js
tsc -w
- 写入 package.json 执行命令行
    
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
+    "tsc": "./node_modules/.bin/tsc -w"
  },

  npm run tsc
#### 启动项目

node dist/index 

## 路由 控制器
[koa-controllers](https://cnpmjs.org/package/koa-controllers)

# moment

日期时间格式化模块

[官网](http://momentjs.com/)

引入以后：

> moment().format('YYYY-MM-DD HH:mm:ss')    // 2018-10-08 21:29:30

- Y: 年
- M: 月
- D: 日
- H: 时（24小时）
- h: 时(am/pm)
- m: 分
- s: 秒

# md5 
生成md5加密密码

### 声明文件 `@types/*`
 * https://www.tslang.cn/docs/handbook/modules.html
 * 由于 在ts 下 ，模块系统不同于 node ，所以这里需要注意一下 ，也就是 koa 不是使用ts所写。 会有提示
 * 
 * 无法找到模块“koa”的声明文件。“f:/my-github/Node-TS-Koa-vue/food-world/front_back/node_modules/koa/lib/application.js”隐式拥有 "any" 类型。
  Try `npm install @types/koa` if it exists or add a new declaration (.d.ts) file containing `declare module 'koa';