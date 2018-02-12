/**
 * 111. Minimum Depth of Binary Tree
 * Given a binary tree, find its minimum depth.
 * The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.
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
 * https://leetcode.com/problems/minimum-depth-of-binary-tree/description/
 */
var minDepth = function(root) {
  if (!root) return 0;
  const L = minDepth(root.left), R = minDepth(root.right);
  return 1 + (Math.min(L, R) || Math.max(L, R));
};