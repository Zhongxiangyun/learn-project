# 树 二叉树 二叉搜索树 图（Graph）
- LinkList就是特殊化的Tree
- Tree就是特殊化的Graph
## 树
根节点 左子树 右子树
![树](https://i.loli.net/2020/02/14/y6BFpNYC9XZlOxE.png)
#### 排序二叉树/二叉搜索树/二叉查找树
1. 左子树上所有结点的值均小于他的根结点的值
2. 右子树上所有结点的值均大于他的根结点的值
3. 递归（以此类推的），左、右子树也分别为二叉查找树
![二叉查找树](https://i.loli.net/2020/02/14/GJ62UOl9xFjrpEn.png)
复杂度：O(log(n))
## Graph
![Graph](https://i.loli.net/2020/02/14/B2zsHhgZDoRtEQG.png)
# 练习
## 98. 验证二叉搜索树
- [validate-binary-search-tree](https://leetcode-cn.com/problems/validate-binary-search-tree/)
1. 中序=》array（升序的数组）
2. 递归；1. 求出左子树的最大值，小于根结点；2.求出右子树的最小值大于根结点。

## 235 二叉搜索树的最近公共祖先
- [lowest-common-ancestor-of-a-binary-search-tree](https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-search-tree/)
## 236 二叉树的最近公共祖先
- [lowest-common-ancestor-of-a-binary-tree](https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-tree/)
1. 查找路径，一直往上找
2. 递归，findPorQ,


