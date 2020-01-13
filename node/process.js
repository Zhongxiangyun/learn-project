console.log (process.argv);
console.log (process.cwd());

process.env.mode = 'dev';

if (process.env.mode === 'dev') {
  console.log ('开发模式');
} else {
  console.log ('生产模式');
}
/*
let i = 0;
setInterval (() => {
  console.log (i);
  i++;
  if (i > 2) {
    process.exit ();
  }
}, 1000);
*/
process.stdin.setEncoding('utf8');

process.stdin.on('readable', () => {
  let chunk;
  // 使用循环确保我们读取所有的可用数据。
  while ((chunk = process.stdin.read()) !== null) {
    process.stdout.write(`数据: ${chunk}`);
  }
});

process.stdin.on('end', () => {
  process.stdout.write('结束');
});

