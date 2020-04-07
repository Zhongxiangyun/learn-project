var fs = require ('fs');

function copy (src, dst) {
  fs.createReadStream (src).pipe (fs.createWriteStream (dst));
}

console.log (process.argv.slice (1)[0]);
function main (argv) {
  // copy(argv[0], argv[1]);
  copy (argv[0], './');
}

// main(process.argv.slice(1));

// var bin = new Buffer([ 0x68, 0x65, 0x6c, 0x6c, 0x6f ]);
// var bin = new Buffer('该公司垃圾的要死', 'utf-8');
const bin = Buffer.alloc (50, '该公司垃圾的要死', 'utf-8');
bin.forEach (v => {
  console.log (v);
});
var str = bin.toString ('utf-8');
console.log (bin, str);
