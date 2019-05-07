/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
  return dfs(root) !== -1;
};

const dfs = function(root) {
  if (!root) return 0;

  const leftDepth = dfs(root.left);
  if (leftDepth === -1) return -1;
  const rightDepth = dfs(root.right);
  if (rightDepth === -1) return -1;
  if (Math.abs(leftDepth - rightDepth) > 1) return -1;
  return Math.max(leftDepth, rightDepth) + 1;
};
