/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
var isSubtree = function(s, t) {
  function traverse(temp) {
    if (!temp) return '';
    return `^${temp.val},${traverse(temp.left)},${traverse(temp.right)}$`;
  }

  const sTraversed = traverse(s);
  const tTraversed = traverse(t);
  return sTraversed.indexOf(tTraversed) > -1;
};