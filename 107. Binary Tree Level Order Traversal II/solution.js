/**
 * 107. Binary Tree Level Order Traversal II
 * Given a binary tree, return the bottom-up level order traversal of its nodes' values. (ie, from left to right, level by level from leaf to root).
 * 
 * For example:
 * Given binary tree [3,9,20,null,null,15,7],
 *     3
 *    / \
 *   9  20
 *     /  \
 *    15   7
 * return its bottom-up level order traversal as:
 * [
 *   [15,7],
 *   [9,20],
 *   [3]
 * ]
 * 
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 * 
 * @param {TreeNode} root
 * @return {number[][]}
 * 
 * URL:
 * https://leetcode.com/problems/binary-tree-level-order-traversal-ii/description/
 */
var levelOrderBottom = function(root) {
  const result = [];

  const traverse = function(node, level) {
    if (!node) return;

    if(result.length < level + 1) {
      result[level] = [node.val];
    } else {
      result[level].push(node.val);
    }

    if (node.left) {
      traverse(node.left, level + 1);
    }
    if (node.right) {
      traverse(node.right, level + 1);
    }
  }

  traverse(root, 0);
  return result.reverse();
};
