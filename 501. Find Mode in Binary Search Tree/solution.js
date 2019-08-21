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
var findMode = function(root) {
  let max = 0;
  let curr = 0;
  let nums = [];
  let preNode;
  inOrder(root);

  function inOrder(node) {
    if (!node) return;
    inOrder(node.left);
    if (preNode && node.val === preNode.val) {
      curr++;
    } else {
      curr = 1;
    }
    if (curr === max) {
      nums.push(node.val);
    }
    if (curr > max) {
      nums = [node.val];
      max = curr;
    }
    preNode = node;
    inOrder(node.right);
  }
  return nums;
};
