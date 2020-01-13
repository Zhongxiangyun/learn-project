# 功能

- 任务列表展示
    - 统计信息（已完成、未完成）
- 任务列表的状态变更
    - 添加
    - 完成
    - 取消完成
    - 删除
- 用户系统

# 后端渲染

### 路由设计

- 首页：/
- 添加：/add
- 任务状态改变：/change/:id
- 删除：/remove/:id


# 前端渲染
# 混合式

# 安装
npm i koa
npm i koa-router
npm i koa-swig
npm i koa-static-cache
npm i koa-bodyparser

## koa-bodyparser：body解析、数据提交
	安装
		npm i koa-bodyparser
	使用
		const bodyParser = require('koa-bodyparser')
		app.use( bodyParser([opts]) )
			该中间件会在解析来自正文的数据以后，把解析后的数据挂载在ctx.request.body下面
    opts
		- enableTypes: 允许解析的类型，['json', 'form']
		- encoding：编码，默认 utf-8
		- formLimit：urlencode 编码类型数据的最大size，默认 56kb
		- jsonLimit：json 格式数据最大size，默认 1mb
		- textLimit：文本格式数据最大size，默认 1mb
		- strict：是否是严格默认，json只接受数组和对象
## koa-multer：formData解析、文件上传
	安装
		npm i koa-multer
	使用
		const multer = require('koa-multer')
		const uploader = multer(opts)
		router.post('/upload', uploader.signle('avatar'))
    opts
		dest / storage: 存放上传文件的目录
		fileFilter：过滤上传文件函数
		preservePath：是否保留文件的完整路径
    单文件上传
		- .single(fieldName)：接收一个指定fieldName的文件上传，上传后的数据保存在 req.file 下
    file 细节
		- fieldname：上传中的字段名
		- originalname：源文件名称
		- mimetype：文件MIME类型
		- size：文件大小
		- destination：文件存储在服务器中文件夹
		- filename：文件存储在服务器中的名称
		- path：文件存储在服务器中的完整路径
    批量上传
		- .array(fieldName[, maxCount])：接收一个指定fieldName的上传数组，上传后的数据保存在 req.files 下，maxCount 用于指定最大上传数量
			{name:'',maxCount:2}
		- .fields(fields)：接收批量的非同组（.array为同组模式）的上传，上传后的数据保存在 req.files下
			[{name:'',maxCount:2},{...}]
    自定义存储
		const storage = multer.diskStorage({
  			destination: function (req, file, cb) {
    				cb(null, '/tmp/my-uploads')
  			},
  			filename: function (req, file, cb) {
    				cb(null, file.fieldname + '-' + Date.now())
  			}
		})
		uploader = multer({ storage: storage })
    上传过滤
		function fileFilter (req, file, cb) {
            //未通过
            cb(null, false)
            //通过
            cb(null, true)
            //错误
            cb(new Error('不能上传'))
        }
    错误处理
		app.post('/profile', function (req, res) {
			const avatarUploader = uploader.signle('avatar')

			avatarUploader(req, res, function (err) {
                if (err) {return}
            })
        })

            
