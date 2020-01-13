const fs = require ('fs');
/**
 * @description 
 * @usage node pro app -i
 * pro: 我们的脚本文件
 * app：要生成的项目的名称
 * -i ：参数，表示要同时生成 index.html 文件 
 */
// 获取用户要生成的项目的名称，
console.log (process.argv);

let appName = process.argv[2];
// 根据项目名称 生成指定的目录
let appPath = __dirname + '/' + appName;

// 是否存在 同目录
if(fs.existsSync(appPath)){
    console.warn('项目目录，已经存在请勿重新创建！')
    process.exit()
}
// 生成目录
fs.mkdirSync(appPath)

fs.mkdirSync(`${appPath}/images`)
fs.mkdirSync(`${appPath}/css`)
fs.mkdirSync(`${appPath}/js`)

// 判断是否 有 -i
if(process.argv.includes('-i')){
    fs.writeFileSync(`${appPath}/index.html`,
    `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>

<body>
    <h1>App</h1>
</body>

</html>
    `
    )
}
console.info('项目创建完成！')
