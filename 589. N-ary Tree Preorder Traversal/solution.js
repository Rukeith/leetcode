/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function(root) {
  const result = [];
  const dfs = node => {
    if (node) {
      result.push(node.val);
      node.children.forEach(el => dfs(el));
    }
  };
  dfs(root);
  return result;
};
