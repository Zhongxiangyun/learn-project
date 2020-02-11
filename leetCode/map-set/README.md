# map映射  set集合
1. 哈希表 哈希函数 哈希碰撞
2. Map vs Set
3. HashMap,TreeMap,HashSet,TreeSet

## hash function
![image.png](https://i.loli.net/2020/02/11/cEf1AHCTUSRXQwW.png)
## Hash Collisions 哈希碰撞
拉链法，在同一个位置，建立一个链表。
![image.png](https://i.loli.net/2020/02/11/gIYcpJ1wBAyhsV2.png)
## List vs Map vs Set
集合实现方式：一般是 哈希表，和二叉树的方式。
![image.png](https://i.loli.net/2020/02/11/gcMoY4diGfph7kT.png)
## 时间复杂度
![image.png](https://i.loli.net/2020/02/11/S7OgNbTnXcapHzj.png)
- 哈希表的数据是无序的，但是时间复杂度是 O(1)
- 二叉查找树/二叉搜索树 的数据是有序的，但是时间复杂度是 O(log(n))
# 练习
### 242. 有效的字母异位词
- [valid-anagram](https://leetcode-cn.com/problems/valid-anagram/)
1. sort -> 是否相等  复杂度 O(log(n))
2. Map计数的方法。 复杂度 O(n) {'a':1,'c':9}

### 1. 两数之和
- [two-sum](https://leetcode-cn.com/problems/two-sum/)
1. 暴力：   x+y=sum
2. Set:     x=sum-y，然后判断set里面有没有，注意每次set需要去掉set。

### 15. 三数之和
- [3sum](https://leetcode-cn.com/problems/3sum/)
1. 暴力：三层嵌套循环。复杂度 O(n^3)
2. c=-(a+b);将 a+b的值放入到Set里面。查找 是否在Set内；复杂度 是：O(n^2)
3. 先排序（从大到小）sort；取出第一个值来；a=-(c+b)剩下的从两头开始取；[1, 0, -1, 0, -2, 2]=>[-2,-1,0,0,1,2]
    -2  与-1 2 的和进行比较；依次判断 第一种：a+b+c>0；第二种：a+b+c<0。复杂度 是：O(n^2) 
### 18. 四数之和
- [4sum](https://leetcode-cn.com/problems/4sum/)
