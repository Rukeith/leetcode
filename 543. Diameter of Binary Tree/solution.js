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
var diameterOfBinaryTree = function(root) {
  let res = 0;
  getDepth(root);
  return res > 0 ? res - 1 : 0;
  
  function getDepth(node) {
    if (!node) return 0;
    const left = getDepth(node.left);
    const right = getDepth(node.right);
    res = Math.max(res, 1 + left + right);
    return Math.max(left, right) + 1;
  }
};