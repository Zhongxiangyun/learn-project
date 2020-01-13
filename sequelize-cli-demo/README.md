# sequelize-cli
sequelize init
npx sequelize-cli init

[sequelize-cli](https://sequelize.org/master/manual/migrations.html#installing-cli)

- config, 配置文件
- models,数据模型
- migrations, 迁移文件
- seeders, 种子文件
init子命令
		:config：初始化配置
		:migrations：初始化迁移文件
		:models：初始化模型文件
		:seeders：初始化种子文件
创建数据库
		db:create
			根据配置创建数据库
	删除数据库
		db:drop
			根据配置删除数据库
创建模型
		model:generate / model:create
			创建一个模型文件
			-- name：模型名称，必须
			-- attributes：字段列表，必须
	示例
		model:create --name User --attributes id:INTEGER
 
		运行 model:generate / model:create 命令以后，会：
			- 在 models 文件夹中创建了一个 user 模型文件（供程序使用）
			- 在 migrations 文件夹中创建了一个名字像 XXXXXXXXXXXXXX-create-user.js 的迁移文件（供迁移使用）
执行迁移
		所谓迁移，就是对数据库进行结构的创建，升级（修改）等操作
		db:migrate
			- 会在数据库中创建一个 SequelizeMeta 表，用于记录每次的迁移记录
			- 执行 migrations 文件下的满足条件（SequelizeMeta表）的脚本

		迁移脚本
			module.exports = {
				up(queryInterface, Sequelize) => {//迁移脚本}
			}
            传递的 queryInterface 对象可以用来修改数据库。 Sequelize 对象存储可用的数据类型，如 STRING 或 INTEGER。 函数 up 或 down 应该返回一个 Promise
    撤销迁移
		db:migrate:undo
			- 撤销上一次的迁移操作
		db:migrate:undo:all
			- 撤销所有的迁移操作
		db:migrate:undo --name 具体迁移脚本
		    db:migrate:undo --name 20191220101032-create-user.js
    
			module.exports = {
				down(queryInterface, Sequelize) => {//迁移脚本}
			}
			queryInterface
## 在已经有的表 增加一个字段
- [QueryInterface](https://sequelize.org/v5/class/lib/query-interface.js~QueryInterface.html)  
- [https://sequelize.org/master/class/lib/query-interface.js~QueryInterface.html](https://sequelize.org/master/class/lib/query-interface.js~QueryInterface.html)

1. 增加一个迁移文件migrations
<!-- 在user表增加 age 字段 -->
```bash
sequelize migration:create --name UserAddAge
```
2. 在生成的迁移文件写上promise 函数  
也就是 在`20191221030043-UserAddAge.js`文件中
 addColumn
 removeColumn

3. 运行迁移文件
```bash
sequelize db:migrate
```
回退
```bash
sequelize db:migrate:undo
```

## 种子文件
		迁移文件是用来构建数据库以及表结构的，种子文件是用来构建数据的
		seed:generate --name demo-user

		种子文件脚本与迁移脚本类似，由up于down函数组成，传入的参数也是一致的
    db:seed 指定种子文件
			运行指定种子文件
		db:seed:all
			运行所有种子文件
	存储记录
		"seederStorage": "json",
		"seederStoragePath": "sequelizeData.json",
		"seederStorageTableName": "sequelize_data"
    db:seed 指定种子文件
			运行指定种子文件
		db:seed:all
			运行所有种子文件
    存储记录
		默认情况下seed不记录过程，如果需要记录则需要单独设置，在配置文件中增加
		seederStorage
			存储引擎：none、json、mongodb、sequelize
		seederStoragePath
			存储路径（json有效）
		seederStorageTableName
			存储表名，mongodb和sequelize有效
        db:seed:undo --seed 指定种子文件
			撤销指定种子文件
		db:seed:undo:all
			撤销所有种子文件    
## 设置环境变量 为home
设置
set NODE_ENV=home
查看
echo %NODE_ENV%

```bash
Sequelize CLI [Node: 12.13.0, CLI: 5.5.1, ORM: 5.21.3]
sequelize [command]

Commands:
  sequelize db:migrate                        Run pending migrations
  sequelize db:migrate:schema:timestamps:add  Update migration table to have timestamps
  sequelize db:migrate:status                 List the status of all migrations
  sequelize db:migrate:undo                   Reverts a migration
  sequelize db:migrate:undo:all               Revert all migrations ran
  sequelize db:seed                           Run specified seeder
  sequelize db:seed:undo                      Deletes data from the database
  sequelize db:seed:all                       Run every seeder
  sequelize db:seed:undo:all                  Deletes data from the database
  sequelize db:create                         Create database specified by configuration
  sequelize db:drop                           Drop database specified by configuration
  sequelize init                              Initializes project
  sequelize init:config                       Initializes configuration
  sequelize init:migrations                   Initializes migrations
  sequelize init:models                       Initializes models
  sequelize init:seeders                      Initializes seeders
  sequelize migration:generate                Generates a new migration file                 [aliases: migration:create]
  sequelize model:generate                    Generates a model and its migration                [aliases: model:create]
  sequelize seed:generate                     Generates a new seed file                           [aliases: seed:create]

Options:
  --help     Show help                                                                                         [boolean]
  --version  Show version number
```












node.js
    koa
        koa-static-cache
        koa-bodyparser
        koa-router
mysql
    mysql2
    sequelize
        sequelize-cli



vue
axios
跨域代理


jwt