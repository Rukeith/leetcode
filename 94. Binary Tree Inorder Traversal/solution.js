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
var inorderTraversal = function(root) {
  const results = [];

  function recursionHelper(root) {
    if (!root) return;
    recursionHelper(root.left);
    results.push(root.val);
    recursionHelper(root.right);
  };

  recursionHelper(root);
  return results;
};