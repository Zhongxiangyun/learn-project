# 堆栈 & 队列
- 堆栈：FILO 先入后出   实现：数组 - 单双链表
- 队列：FIFO 先入先出   实现：数组 - 双链表
## 堆栈
![stack](https://i.loli.net/2020/02/01/oapLPNMqlk8g17d.png)
## 队列
![queue](https://i.loli.net/2020/02/01/vpwaKVXqhUboyIL.png)
## 时间复杂度
- [各数据结构 时间复杂度 网址www.bigocheatsheet.com](https://www.bigocheatsheet.com/)
![时间复杂度](https://www.bigocheatsheet.com/img/big-o-cheat-sheet-poster.png)
![时间复杂度](https://i.loli.net/2020/02/01/NypwsSqjIahC1GZ.png)
## 练习
### 20. 有效的括号
- [valid-parentheses](https://leetcode-cn.com/problems/valid-parentheses/)
- 思路：
    1. 分为左括号 右括号。如果第一个 就是 右括号，就是false；括号不一一匹配false。
    2. 查找一个 左括号 就放入栈中 append。
    3. 查找一个 右括号 就与栈顶的 括号 就行匹配 如果不是=>false; or true,然后把这对括号 pop 出;
    4. 确定 最后的栈 是否 为空；如果 是 则是有效的括号；否则 false
 tips：可以声明一个对象；来匹配左右括号。   
![python解法](https://i.loli.net/2020/02/01/o34e5DmxsuzPy2T.png)

### 232. 用栈实现队列
- [implement-queue-using-stacks](https://leetcode-cn.com/problems/implement-queue-using-stacks/)

### 225. 用队列实现栈
- [implement-stack-using-queues](https://leetcode-cn.com/problems/implement-stack-using-queues/)