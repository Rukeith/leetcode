/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if (root === null) return [];
  const queue = [root];
  const res = [];
  while (queue.length > 0) {
    const queueSize = queue.length;
    const breadth = [];
    for (let i = 0; i < queueSize; i++) {
      const curr = queue.shift();
      if (curr) {
        breadth.push(curr.val);
        queue.push(...curr.children);
      }
    }
    res.push(breadth);
  }
  return res;
};
