# 递归 & 分治
## 递归 recursion
递归就是一个循环，也就是函数通过自己调用自己达到循环。从来不中止的递归叫死循环/死递归。
# 分治 divide & conquer
把一个问题，分成一个个小问题去解决，最后合在一起。可以并行去运算。

# 练习

## 50. Pow(x, n)
- [powx-n](https://leetcode-cn.com/problems/powx-n/)
1. :直接调库函数，Math.pow()   **  o(1)
2. 暴力 一个个的去乘 o(n)
3. 分治 从中间分开  o(log(n))
    偶：y=x^(Math.floor(n/2))  res=y*y
    奇：y=x^(Math.floor(n/2))  res=y*y*x
## 169. 多数元素
- [majority-element](https://leetcode-cn.com/problems/majority-element/)
1. 暴力 对每一个 进行计数 o(n^2)
2. Map o(n)
3. 排序 sort ；记录重复次数
4. 分治
