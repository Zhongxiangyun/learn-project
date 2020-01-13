const fs = require ('fs');
// 文件夹

// 创建,不会递归创建，即fs.mkdirSync('folder/aa/abb')
try {
  //   fs.mkdirSync ('folder');
} catch (error) {
  throw error;
}
console.log ('4444');
// 删除  不能删除非空文件夹
// fs.rmdirSync ('folder');

// 递归删除 文件夹
function rmdir (dirPath) {
  let files = fs.readdirSync (dirPath);
  files.forEach (child => {
    let childPath = `${dirPath}/${child}`;
    if (fs.statSync (childPath).isDirectory ()) {
        rmdir(childPath)
    } else {
        fs.unlinkSync(childPath)
    }
  });
  fs.rmdirSync(dirPath)
}

rmdir('./folder')
