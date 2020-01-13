let a = Buffer.alloc (10, 1);
// a[0] = 9999;
// 只能存二进制数据
// 会以16进制显示出来
// a.write('hello')  //写入的时候，注意buffer长度
/**
 * buf.write(string[, offset[, length]][, encoding])
 * string <string> 要写入 buf 的字符串。
* offset <integer> 开始写入 string 之前要跳过的字节数。默认值: 0。
* length <integer> 要写入的字节数。默认值: buf.length - offset。
* encoding <string> string 的字符编码。默认值: 'utf8'。
* 返回: <integer> 已写入的字节数。
 */
a.write('hello',2)  //写入的时候，注意buffer长度
console.log (a);
const str='哈哈'
let b = Buffer.from (str);
console.log (b);
console.log (str.length);
console.log (b.length); // 字节长度
console.log (Buffer.byteLength(str)); // 字节长度

const buf1 = Buffer.from('ABC');
const buf2 = Buffer.from('414243', 'hex');
const buf3 = Buffer.from('ABCD你');

// console.log(buf3.toString()) 
//ABCD你
console.log(buf3.toJSON()) 
// {
//     type: 'Buffer',
//     data: [
//        65,  66,  67, 68,
//       228, 189, 160
//     ]
//   }
// 拷贝 buf.copy(target[, targetStart[, sourceStart[, sourceEnd]]])
let buf4= Buffer.alloc (10);
buf3.copy(buf4)
console.log(buf4.toString())
// equals 比较
// console.log(buf1.equals(buf2));
// 打印: true
// console.log(buf1.equals(buf3));
// 打印: false
buf1.forEach(v=>{
    // console.log(v)
    // 65
    // 66
    // 67
    // console.log(v.toString(16))
    // 41
    // 42
    // 43    
    // console.log(String.fromCharCode(v))  fromCharCode() 可接受一个指定的 Unicode 值，然后返回一个字符串。
    // console.log(String.fromCodePoint(v)) String.fromCodePoint() 静态方法返回使用指定的代码点序列创建的字符串。
    // A
    // B
    // C    
})
console.log(Buffer.isEncoding('utf-8'));