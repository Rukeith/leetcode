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
var minDiffInBST = function(root) {
  let ans = Infinity, prev = null;

  function scan(node) {
    if (!node) return;
    scan(node.left);
    if (prev) ans = Math.min(ans, node.val - prev);
    prev = node.val;
    scan(node.right);
  }

  scan(root);
  return ans;
};