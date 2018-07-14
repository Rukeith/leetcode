/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
  let currentNode = root;
  while(currentNode !== null) {
    if (currentNode.val === val) return currentNode;
    currentNode = currentNode.val > val ? currentNode.left : currentNode.right;
  }
     
  return [];
};