/**
*～╭════╮┌══════════════┐
* ╭╯开车║ ▁▂▃▅▆▇  |  ~~~
* ╰⊙═⊙╯╰══⊙══════⊙══╯
* @description:  111. 二叉树的最小深度
* @author: PresByter
* @date  : 2020/02/22 10:08:24
* @file  : 111.ts
*/
/**
 * 111. 二叉树的最小深度
 * https://leetcode-cn.com/problems/minimum-depth-of-binary-tree/
 * 
给定一个二叉树，找出其最小深度。

最小深度是从根节点到最近叶子节点的最短路径上的节点数量。

说明: 叶子节点是指没有子节点的节点。

示例:

给定二叉树 [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
返回它的最小深度  2.
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
interface TreeNode {
    val: any
    left: any
    right: any
}
/**
 * @description 解法一
 * @param {TreeNode} root
 * @return {number}
 */
const minDepth = (root: TreeNode): number => {
    // 根结点 没有的时候
    if (root === null) return 0
    // 左子节点 没有
    if (!root.left) return 1 + minDepth(root.right)
    // 右子节点
    if (!root.right) return 1 + minDepth(root.left)
    // 分治
    let leftMinDepth: number = minDepth(root.left)
    let rightMinDepth: number = minDepth(root.right)
    // 把子问题的结果放到一起
    return 1 + Math.min(leftMinDepth, rightMinDepth)

};

/**
 * @description 解法二
 * @param {TreeNode} root
 * @return {number}
 */
const minDepth2 = (root: TreeNode): number => {
    // 根结点 没有的时候
    if (root === null) return 0
    // 分治
    let leftMinDepth: number = minDepth2(root.left)
    let rightMinDepth: number = minDepth2(root.right)
    // 把子问题的结果放到一起
    return (leftMinDepth === 0 || rightMinDepth === 0) ? (1 + leftMinDepth + rightMinDepth) : (1 + Math.min(leftMinDepth, rightMinDepth))

};