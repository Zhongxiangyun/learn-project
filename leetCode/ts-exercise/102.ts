/**
*～╭════╮┌══════════════┐
* ╭╯开车║ ▁▂▃▅▆▇  |  ~~~
* ╰⊙═⊙╯╰══⊙══════⊙══╯
* @description: 102. 二叉树的层次遍历 
* @author: PresByter
* @date  : 2020/02/21 20:17:10
* @file  : 102.ts
*/
/**
 * 102. 二叉树的层次遍历
给定一个二叉树，返回其按层次遍历的节点值。 （即逐层地，从左到右访问所有节点）。

例如:
给定二叉树: [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
返回其层次遍历结果：

[
  [3],
  [9,20],
  [15,7]
]
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 * https://leetcode-cn.com/problems/binary-tree-level-order-traversal/solution/102er-cha-shu-de-ceng-ci-bian-li-javascript-ti-jie/
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
interface TreeNode {
    val: any
    left: any
    right: any
}
const levelOrder = (root: TreeNode): number[][] => {
    if (!root) return [];
    const queue = [root];
    const res = []; // 存放遍历结果
    let level = 0; // 代表当前层数
    while (queue.length) {
        res[level] = []; // 第level层的遍历结果

        let levelNum = queue.length; // 第level层的节点数量
        while (levelNum--) {
            const front = queue.shift();
            res[level].push(front.val);
            if (front.left) queue.push(front.left);
            if (front.right) queue.push(front.right);
        }
        level++;
    }
    return res;
};
// console.log(levelOrder([3,9,20,null,null,15,7]));
