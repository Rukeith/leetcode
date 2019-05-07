/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
  if (!root) return [];

  const result = [];
  const queue = [root];
  while (queue.length > 0) {
    const current = [];
    const size = queue.length;

    for (let i = 0; i < size; i++) {
      const head = queue.shift();
      current.push(head.val);
      if (head.left) queue.push(head.left);
      if (head.right) queue.push(head.right);
    }

    result.unshift(current);
  }

  return result;
};
