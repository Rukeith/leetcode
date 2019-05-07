/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
  let tree = new TreeNode();

  tree = addMiddleIndexToBST(nums, 0, nums.length - 1, tree);
  return tree;
};

var addMiddleIndexToBST = function(nums, start, end, tree) {
  if (start <= end) {
    const middle = Math.floor((start + end) / 2);
    tree.val = nums[middle];
    tree.left = addMiddleIndexToBST(nums, start, middle - 1, new TreeNode());
    tree.right = addMiddleIndexToBST(nums, middle + 1, end, new TreeNode());
  } else {
    return null;
  }
  return tree;
};
