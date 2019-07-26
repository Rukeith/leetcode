/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number}
 */
var pathSum = function(root, sum) {
  function helper(root) {
    if (!root) return;
    total += root.val;
    const key = total - sum;
    if (map.has(key)) {
      result += map.get(key);
    }

    map.set(total, map.get(total) + 1 || 1);
    helper(root.left);
    helper(root.right);
    map.set(total, map.get(total) - 1 || 0);
    total -= root.val;
  }

  const map = new Map();
  map.set(0, 1);
  let total = 0;
  let result = 0;

  helper(root);
  return result;
};
