# Priority queue 优先队列(堆)
> 正常进，按优先级出
## 实现机制
1. 堆
2. 二叉树

![二叉树mini heap](https://i.loli.net/2020/02/04/gwafjmrbKxVsRnN.png)
![二叉树max heap](https://i.loli.net/2020/02/04/UAdtE8jVbX1ucQh.png)
[维基百科](https://en.wikipedia.org/wiki/Heap_(data_structure))
![时间复杂度](https://i.loli.net/2020/02/04/9fF84izwup73W6Y.png)
## 练习
### 703. 数据流中的第K大元素
- [kth-largest-element-in-a-stream](https://leetcode-cn.com/problems/kth-largest-element-in-a-stream/)
思路：
- 使用 mini heap；
- 先排序，从大到小；取第K个值

1. 保存前K个最大的值
2. 当加入一个新值进去，判断是否比原数组里面的最小值大；如果是 新值替换最小值， 否则不变。

### 239. 滑动窗口最大值
- [sliding-window-maximum](https://leetcode-cn.com/problems/sliding-window-maximum/)



