/**
*～╭════╮┌══════════════┐
* ╭╯开车║ ▁▂▃▅▆▇  |  ~~~
* ╰⊙═⊙╯╰══⊙══════⊙══╯
* @description: 235. 二叉搜索树的最近公共祖先 
* @author: PresByter
* @date  : 2020/02/14 20:28:23
* @file  : 235.ts
*/


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
interface RootType {
    val: any
    left: any
    right: any
}
// 对于 二叉搜索树来说
// 1. 左子树上所有结点的值均小于他的根结点的值
// 2. 右子树上所有结点的值均大于他的根结点的值
const lowestCommonAncestor235 = (root: RootType, p: RootType, q: RootType): RootType => {
    if (p.val < root.val && root.val > q.val) {
        return lowestCommonAncestor235(root.left, p, q)
    }
    if (p.val > root.val && root.val < q.val) {
        return lowestCommonAncestor235(root.right, p, q)
    }
    return root
};

const lowestCommonAncestor235_ = (root: RootType, p: RootType, q: RootType): RootType => {
    while (root) {
        if (p.val < root.val && root.val > q.val) {
            root = root.left
        } else if (p.val > root.val && root.val < q.val) {
            root = root.right
        } else {
            return root
        }
    }
};