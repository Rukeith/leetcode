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
var rightSideView = function(root) {
  const next = [{
    node: root,
    level: 0
  }];
  const sight = [];

  while (next.length !== 0) {
    const curr = next.pop();
    if (!curr.node) continue;
    if (curr.level === sight.length) sight.push(curr.node.val);
    if (curr.node.left) {
      next.push({
        node: curr.node.left,
        level: curr.level + 1
      });
    }
    if (curr.node.right) {
      next.push({
        node: curr.node.right,
        level: curr.level + 1
      });
    }
  }
  return sight;
};