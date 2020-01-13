# 步骤
1. npm init --yes
2. npm i commander
3. + index.js
4. npm i chalk //


- node index -h
- node index -v


## commander
[https://www.npmjs.com/package/commander](https://www.npmjs.com/package/commander)
.action(fn)
		指定命令要执行的动作行为
		该函数执行过程会接收到至少一个参数
		如果命令中带有参数，则是对应的参数列表
		参数的最后一个永远都是 commander 实例


## chalk
[https://www.npmjs.com/package/chalk](https://www.npmjs.com/package/chalk)
    使用
		const chalk = require('chalk')
		得到一个 chalk 对象，通过这个对象，我们就可以给控制台中的文字加上各种样式了，就像css一样	
    chalk.<style>[.<style>...](string, [string...])
		
	Styles
		Modifiers 文字修饰：
		bold Colors 文字颜色：red、green、yellow、blue、cyan 
		Background colors 背景颜色：bgRed、bgGreen、bgYellow、bgBlue、bgCyan	

	Colors
		.hex('#DEADED') 
		.keyword('orange') 
		.rgb(15, 100, 204)
	Background colors
		.hex('#DEADED')
		.keyword('orange')
		.rgb(15, 100, 204)	

## inquirer
    交互式命令，提问用户，收集用户输入数据
	安装
		npm i inquirer
	使用
		require('inquirer')

		inquirer.prompt(questions).then(answers=>{
			...
		})
    questions
		type：提问类型，input, confirm, list, rawlist, expand, checkbox, password, editor
		name：问题名称，供程序后续使用
		message：问题文字，给用户看的
		default：默认值
		choices：选项
		validate：输入验证
		filter：数据过滤
    input
		提出问题，用户输入答案
		可用选项：type, name, message[, default, filter, validate, transformer]
    confirm
		提出选择，用户选择 Y or N
		可用选项：type, name, message, [default]
			default如果提供，必须是 boolean 类型
    list
		单选
		可用选项：type, name, message, choices[, default, filter]
			choices为一个数组，数组中可以是简单的字符串，也可以是一个包含了name和value属性的对象
			默认选中项为数组中某条数据的下标        
    rawlist
		单选
		可用选项：type, name, message, choices[, default, filter]
			choices为一个数组，数组中可以是简单的字符串，也可以是一个包含了name和value属性的对象
			默认选中项为数组中某条数据的下标
    checkbox
		多选
		可用选项：type, name, message, choices[, filter, validate, default]
			choices 为一个对象数组，对象中 checked 属性 为 true 的表示选中项
    validate方法
		对用户输入或选择的内容进行验证，返回boolean值，确定提问是否继续
		可以返回字符串作为验证失败的提示
    filter方法
		对用户输入或选择的内容进行过滤
		接受一个参数：用户输入或选择的内容
		返回的值将作为过滤后的值                            