# 数组 && 链表
## 数组
![image.png](https://i.loli.net/2020/01/30/6x4jchSuntfiYrp.png)
### 时间复杂度
![image.png](https://i.loli.net/2020/01/30/e7LjXTGDnNRBZlv.png)
- 查找 access O(1)
- 插入 insert O(n) => 插入到第一个位置 是O(n)；最后一个位置是O(1) ；平均是O(n/2)。即O(n) 。  
- 删除 delete O(n) => 删除到第一个位置 是O(n)；最后一个位置是O(1) ；平均是O(n/2)。即O(n)。
## 链表
> 单链表 && 双链表
![image.png](https://i.loli.net/2020/01/30/VXHuzYWnKRfTJ16.png)
相当于数组，当你不知道有多少数据的时候，经常 插入删除 的时候。这种情况下，多使用链表。
![image.png](https://i.loli.net/2020/01/30/S4Pt3WcksepoJlx.png)
### 单链表 插入 删除
![插入 链表](https://i.loli.net/2020/01/30/HnMQRgezlduTUDZ.png)
![删除 链表](https://i.loli.net/2020/01/30/5eDcYO4swUk3oWv.png)
#### 时间复杂度
![链表 时间复杂度](https://i.loli.net/2020/01/30/21L8gFUvJiSXjGP.png)
- 查找 access O(n)
- 插入 insert O(1) 
- 删除 delete O(1)
### 双链表 插入 删除
前驱 后继
![双链表](https://i.loli.net/2020/01/30/sylW79L4IX3JCTS.png)

## 练习
### 206. 反转链表
- [reverse-linked-list](https://leetcode-cn.com/problems/reverse-linked-list/)

### 24. 两两交换链表中的节点
- [swap-nodes-in-pairs](https://leetcode-cn.com/problems/swap-nodes-in-pairs/)

### 141. 环形链表
- [linked-list-cycle](https://leetcode-cn.com/problems/linked-list-cycle/)
1. 看最后 是不是为 null
2. 走一个 存一个set，判断是不是 重复
3. 龟兔赛跑：设置一个快指针和一个慢指针；快 每次走2步；慢每次 走1步；如果是循环，最后会 快与慢相等。
