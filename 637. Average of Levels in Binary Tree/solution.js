/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var averageOfLevels = function(root) {
  if (!root) return;
  const level = 0;
  const counts = [];
  counts[level] = counts[level] || { sum: 0, nodes: 0 };
  counts[level].sum += root.val;
  counts[level].nodes++;
  averageOfLevels(root.left, level + 1, counts);
  averageOfLevels(root.right, level + 1, counts);
  return level || counts.map(count => count.sum / count.nodes);
};