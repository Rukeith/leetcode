/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
  if (!root) return 0;
  const L = minDepth(root.left), R = minDepth(root.right);
  return 1 + (Math.min(L, R) || Math.max(L, R));
};