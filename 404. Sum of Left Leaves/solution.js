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
var sumOfLeftLeaves = function(root) {
  let res = 0;
  if (root) {
    if (root.left && !root.left.left && !root.left.right) res += root.left.val;
    return res + sumOfLeftLeaves(root.left) + sumOfLeftLeaves(root.right);
  }
  return res;
};