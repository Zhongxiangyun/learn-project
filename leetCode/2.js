/**
*～╭════╮┌══════════════┐
* ╭╯开车║ ▁▂▃▅▆▇  |  ~~~
* ╰⊙═⊙╯╰══⊙══════⊙══╯
* @description: 有效的字母异位词 
* @author: PresByter
* @date  : 2020/01/21 19:02:05
* @file  : 2.js
*/
// 判断两个字符串 是不是字母异位词。即：两个字符串 里面的字母一样，排列顺序不一致。eg. anagram 和nagaram
const str1 = 'anagram';
const str2 = 'nagaral';

const isDiff = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  } else {
    return (
      str1.split ('').sort ().toString () ===
      str2.split ('').sort ().toString ()
    );
  }
};
const res = isDiff (str1, str2);
console.log (res);
