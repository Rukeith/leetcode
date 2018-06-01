/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

var longestUnivaluePath = function(root) {
  let maxCount = 0;

  const traverse = (currNode) => {
      if (!currNode) return 0;

      let leftCount = 0;
      let rightCount = 0;
      const leftBranch = traverse(currNode.left);
      const rightBranch = traverse(currNode.right);

      if (currNode.left && currNode.val === currNode.left.val) {
        leftCount = leftBranch + 1;
      }
      if (currNode.right && currNode.val === currNode.right.val) {
        rightCount = rightBranch + 1;
      }

      maxCount = Math.max(maxCount, leftCount + rightCount);
      return Math.max(leftCount, rightCount);
  }

  traverse(root);
  return maxCount;
};