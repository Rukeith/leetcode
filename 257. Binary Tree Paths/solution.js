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
  const res = [];
  const cur = [];
  if (root === null) return res;
  function dfs(node) {
    cur.push(node.val);
    if (node.left === null && node.right === null) {
      res.push(cur.join("->"));
      cur.pop();
      return;
    }
    if (node.left) dfs(node.left);
    if (node.right) dfs(node.right);
    cur.pop();
  }
  dfs(root);
  return res;
};
