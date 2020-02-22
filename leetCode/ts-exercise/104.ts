/**
*～╭════╮┌══════════════┐
* ╭╯开车║ ▁▂▃▅▆▇  |  ~~~
* ╰⊙═⊙╯╰══⊙══════⊙══╯
* @description:  104. 二叉树的最大深度
* @author: PresByter
* @date  : 2020/02/22 10:08:12
* @file  : 104.ts
*/
/**
 * 104. 二叉树的最大深度
 * https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/
 * 
给定一个二叉树，找出其最大深度。

二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。

说明: 叶子节点是指没有子节点的节点。

示例：
给定二叉树 [3,9,20,null,null,15,7]，

    3
   / \
  9  20
    /  \
   15   7
返回它的最大深度 3 。

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
 * @param {TreeNode} root
 * @return {number}
 */
const maxDepth = (root: TreeNode): number => {
    if (!root) return 0;
    const queue = [root];
    // const res = []; // 存放遍历结果
    let level = 0; // 代表当前层数
    while (queue.length) {
        // res[level] = []; // 第level层的遍历结果
        let levelNum = queue.length; // 第level层的节点数量
        while (levelNum--) {
            const front = queue.shift();
            // res[level].push(front.val);
            if (front.left) queue.push(front.left);
            if (front.right) queue.push(front.right);
        }
        level++;
    }
    return level;
};
// 解法 二
const maxDepth1 = (root: TreeNode): number => {
    return root === null ? 0 : 1 + Math.max(maxDepth1(root.left),maxDepth1(root.right))
};