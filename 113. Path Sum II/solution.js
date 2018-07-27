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
 * @return {number[][]}
 */
var pathSum = function (root, sum) {
  if (!root) return [];
  if (sum === root.val && !root.left && !root.right) return [ [root.val] ];

  const left = pathSum(root.left, sum - root.val);
  const right = pathSum(root.right, sum - root.val);

  for (let i = 0; i < left.length; i++) left[i].unshift(root.val);
  for (let i = 0; i < right.length; i++) right[i].unshift(root.val);
  return left.concat(right);
};