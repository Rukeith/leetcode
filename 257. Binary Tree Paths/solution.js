/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
  if (!root) return [];
  const result = [];
  _depth(root, '', result);
  return result;
};

var _depth = function(root, str, result) {
  if (root) {
    str += root.val;
    if (root.left) {
      _depth(root.left, str + '->', result);
    }
    if (root.right) {
      _depth(root.right, str + '->', result);
    }
    if (!root.left && !root.right) {
      result.push(str);
    }
  }
}