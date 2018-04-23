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
  let count = 0;
  if (root) {
    total += root.val;
    if (hash[total - sum]) count = hash[total - sum];
    hash[total] = hash[total] ? hash[total] + 1 : 1;
    count += pathSumHelper(root.left, sum, total, hash);
    count += pathSumHelper(root.right, sum, total, hash);
    hash[total]--;
  }
  return count;
};