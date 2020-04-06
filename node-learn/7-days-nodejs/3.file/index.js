var fs = require('fs');

function copy(src, dst) {
    fs.createReadStream(src).pipe(fs.createWriteStream(dst));
}

console.log(process.argv.slice(1)[0]);
function main(argv) {
    
    // copy(argv[0], argv[1]);
    copy(argv[0], './');
}

main(process.argv.slice(1));