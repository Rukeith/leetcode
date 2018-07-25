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
var isValidBST = function(root, max = Infinity, min = -Infinity) {
  if (!root) return true;
  const { val, right, left } = root;
  if (val >= max || val <= min) return false;
  return isValidBST(left, Math.min(max, val), min) && isValidBST(right, max, Math.max(min, val));
};