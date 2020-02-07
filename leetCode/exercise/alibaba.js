/**
 * 编码题一：字符串填充
 * 说明：实现一个方法，将目标字符串用另一个字符串或空格填充至目标长度。
 *   填充从目标字符串的左侧开始。
 *   1. 语法：padLeft(str, len [, chars])
 *   2. 参数 str ，目标字符串
 *   3. 参数 len ，目标长度。如果这个数值小于目标字符串的长度，则返回目标字符串本身
 *   4. 参数 chars ，可选，填充字符串，默认空格。如果字符串太长，使填充后的字符串长度超过了目标长度，则只保留最左侧的部分，其他部分会被截断
 *   5. 返回填充后的字符串
 * 示例：
 *   padLeft('abc', 10);         // '       abc'
 *   padLeft('abc', 10, 'foo');  // 'foofoofabc'
 *   padLeft('abc', 6,'123465'); // '123abc'
 *   padLeft('abc', 6, '_-');    // '_-_abc'
 *   padLeft('abc', 8, '0');     // '00000abc'
 *   padLeft('abc', 1);          // 'abc'
 */
function padLeft (str, len, chars) {
  /* 代码实现 */
}

/**
   * 编码题二：类似通配符的匹配
   * 说明：实现支持 '.' 和 '*' 的类似通配符的匹配，规则如下：
   *   1. '.' 匹配任意单个字符
   *   2. '*' 匹配零个或多个前面的元素
   *   3. isMatch(s, r); s 是匹配的目标字符串，r 是带匹配符的字符串
   *   4. r 的匹配应该覆盖 s
   * 
   * 示例：
   *   isMatch('aa','a') // return false
   *   isMatch('aa','aa') // return true
   *   isMatch('aaa','aa') // return false
   *   isMatch('aa', 'a*') // return true
   *   isMatch('aab', 'a*') // return false
   *   isMatch('aa', '.*') // return true
   *   isMatch('ab', '.*') // return true
   *   isMatch('ab', '.a') // return false
   *   isMatch('ab', '.b') // return true
   *   isMatch('aab', 'c*a*b') // return true
   */
function isMatch (s, r) {
  /* 代码实现 */
}

/**
   * 编码题三：实现一个检验对象是否循环指向的方法
   * 说明：当一个对象存在对自身引用时，称之为循环指向
   *   如`var o = { a: {} }; o.a = o;` 
   *   o -> a -> o，就形成循环指向
   * 示例：
   *   isCyclic(window); // true
   *   isCyclic({}); // false
   *   var o = {}; o.o = o;
   *   isCyclic(o); // true
   * 
   *   var obj = { foo: { bar: { baz: { qux: {} } } } };
   *   obj.foo.bar.baz.qux = obj.foo;
   *   isCyclic(o); // true
   */

function isCyclic (o) {
  /* 代码实现 */
}

/**
   * 编码题四：裁剪拼凑数组
   * 说明：实现一个方法，按指定的序号N将长度为M的数组剪裁成两半，并把前后部分互换拼装成新数组
   *   其中，M > 2, M > N > 0
   * 示例：
   *  cutAndJoinArray([1, 2, 3, 4], 1); // [2, 3, 4, 1]
   *  cutAndJoinArray([1, 2, 3, 4, 5], 3); // [4, 5, 1, 2, 3]
   *  cutAndJoinArray([1, 2, 3, 4, 5, 6], 2); // [3, 4, 5, 6, 1, 2]
   */
function cutAndJoinArray (arr, index) {
  /* 代码实现 */
}
