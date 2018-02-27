/**
 * 530. Minimum Absolute Difference in BST
 * Given a binary search tree with non-negative values, find the minimum absolute difference between values of any two nodes.
 * 
 * Example:
 * Input:
 *    1
 *     \
 *      3
 *     /
 *    2
 * 
 * Output:
 * 1
 * 
 * Explanation:
 * The minimum absolute difference is 1, which is the difference between 2 and 1 (or between 2 and 3).
 * Note: There are at least two nodes in this BST.
 * 
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 * 
 * @param {TreeNode} root
 * @return {number}
 * 
 * URL:
 * https://leetcode.com/problems/minimum-absolute-difference-in-bst/description/
 */
var getMinimumDifference = function(root) {
  let prev = null;
  let min = Number.MAX_SAFE_INTEGER;

  const traversal = (root) => {
    if (root === null) return;
    traversal(root.left);
    if (prev !== null && min > root.val - prev) {
      min = root.val - prev;
    }
    prev = root.val;
    traversal(root.right);
  };
  traversal(root);
  return min;
};