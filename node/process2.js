const fs = require ('fs');

process.stdout.write ('请输入你要创建的项目的名称：');

process.stdin.resume();
// 监听事件
process.stdin.on ('data', e => {
  //   会把 回车 换行符 当成文件名 进行创建，导致报错，所以使用正则去除 回车换行符
  fs.mkdirSync (e.toString ().replace ('\r\n', ''));

  process.stdout.write ('项目创建成功');
  process.exit()
});

// 生产文件夹
