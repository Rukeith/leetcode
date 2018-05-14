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
var findTilt = function(root) {
  let tilt = 0;

  function visit(node) {
    if (!node) return 0;
    const left = visit(node.left);
    const right = visit(node.right);
    tilt += Math.abs(left - right);
    return left + right + node.val;
  }

  visit(root);
  return tilt;
};