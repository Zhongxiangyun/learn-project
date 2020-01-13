const fs = require ('fs');
// fs.open(path[, flags[, mode]], callback)

fs.open ('fs.js', 'r', (err, fd) => {
  console.log (err, fd);
  // fs.read(fd, buffer, offset, length, position, callback)
  const buffers = Buffer.alloc (100);
  //                               错误信息 添加内容长度 内容的buffer信息
  fs.read (fd, buffers, 0, 100, null, (err, bytesRead, buffer) => {
    console.log (err, bytesRead, buffer.toString ());
  });
});
try {
  const fd = fs.openSync ('fs.js', 'r');
  console.log (fd);
} catch (error) {
  console.log (error);
}

// process.exit()
