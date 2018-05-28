/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
  const nums = [];
  inorder(root,nums);
  let i = 0, j = nums.length - 1;
  while (i < j) {
    const sum = nums[i] + nums[j];
    if (sum < k) {
      ++i;
    } else if (sum > k) {
      --j;
    } else {
      return true;
    }
  }
  return false;
};

const inorder = (root, nums) => {
  if (!root) return;
  inorder(root.left, nums);
  nums.push(root.val);
  inorder(root.right, nums);
};