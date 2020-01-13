const fs = require ('fs');
const fspromise = require ('fs').promises;
// 当文件发送变化的时候。触发回调
fs.watchFile ('data.txt', res => {
  console.log ('change', res);
});

// 监听目录
// fs.watch(filename[, options][, listener])
fs.watch ('file', res => {
  console.log ('change', res);
});

fspromise.mkdir('bb').then(err=>{
    console.log(err)
})

process.stdout.cursorTo(0,0)
process.stdout.write('() aaaa \r\n')
process.stdout.write('() bbbb \r\n')
process.stdout.write('() cccc \r\n')