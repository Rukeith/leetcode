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
var getMinimumDifference = function(root) {
  let prev = null;
  let min = Number.MAX_SAFE_INTEGER;

  const traversal = root => {
    if (!root) return;
    traversal(root.left);
    if (prev !== null && min > Math.abs(root.val - prev)) {
      min = Math.abs(root.val - prev);
    }
    prev = root.val;
    traversal(root.right);
  };
  traversal(root);
  return min;
};
