/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
  if (!root) return [];

  const result = [],
    stack = [root];

  while (stack.length) {
    root = stack.pop();
    result.push(root.val);
    if (root.right) stack.push(root.right);
    if (root.left) stack.push(root.left);
  }

  return result;
};