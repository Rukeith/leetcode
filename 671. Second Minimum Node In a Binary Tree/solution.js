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
var findSecondMinimumValue = function(root) {
  const min = root.val;
  let secondMin = Number.POSITIVE_INFINITY;
  function traverse (node) {
    if (!node) return;
    const {
      right,
      left,
      val
    } = node;
    if (val > min && val < secondMin) {
      secondMin = val;
    }
    traverse(right);
    traverse(left);
  }
  traverse(root);
  return isFinite(secondMin) ? secondMin : -1;
};