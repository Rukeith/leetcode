/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
  const makeInOrderPath = (node, treePath) => {
    if (node.right) makeInOrderPath(node.right, treePath);
    if (node.left) makeInOrderPath(node.left, treePath);
    treePath.unshift(node);
  };

  if (root) {
    const path = [];
    makeInOrderPath(root, path);

    while(path.length > 0) {
      const node = path.shift();
      node.left = null;
      node.right = path[0];
    }
  }
};