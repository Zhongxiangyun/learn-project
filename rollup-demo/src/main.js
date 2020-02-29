/**
*～╭════╮┌══════════════┐
* ╭╯开车║ ▁▂▃▅▆▇  |  ~~~
* ╰⊙═⊙╯╰══⊙══════⊙══╯
* @description: 测试 
* @author: PresByter
* @date  : 2020/02/29 11:54:43
* @file  : main.js
*/
// src/main.js
import {version} from '../package.json';

import foo from './foo.js';
const aa = 'aa';
export default function () {
  // console.log(aa);

  console.log (foo, 'version ' + version);
}
