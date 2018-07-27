/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
  const helper = (inorder, postorder, a1, a2, b1, b2) => {
    if (a1 > a2 || b1 > b2) return null;
    const val = postorder[b2];
    const root = new TreeNode(val);
    const index = inorder.indexOf(val);
    root.left = helper(inorder, postorder, a1, index - 1, b1, b1 + index - a1 - 1);
    root.right = helper(inorder, postorder, index + 1, a2, b1 + index - a1, b2 - 1);
    return root;
  };

  return helper(inorder, postorder, 0, inorder.length - 1, 0, postorder.length - 1);
};