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
var levelOrder = function (root) {
  const answer = [];
  const queue = [root, '+'];
  let level = [];

  while (queue.length) {
    const node = queue.shift();
    if (node) {
      if (node === '+') {
        if (queue.length) {
          queue.push('+');
          answer.push(level);
          level = [];
        }
      }

      if (node.val !== undefined) level.push(node.val);
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
  }

  if (level.length) answer.push(level);
  return answer;
};