/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
  if (root) {
    const child = new TreeNode(root.val);
    child.left = invertTree(root.right);
    child.right = invertTree(root.left);
    return child;
  }
  return root;
};