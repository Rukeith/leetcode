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
var sumNumbers = function(root) {
  const sum = (node, value) => {
    if (!node) return 0;
    if (!node.left && !node.right) return value * 10 + node.val;
    return sum(node.left, value * 10 + node.val) + sum(node.right, value * 10 + node.val);
  };

  return sum(root, 0);
};