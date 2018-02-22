/**
 * 501. Find Mode in Binary Search Tree
 * Given a binary search tree (BST) with duplicates, find all the mode(s) (the most frequently occurred element) in the given BST.
 * Assume a BST is defined as follows:
 * The left subtree of a node contains only nodes with keys less than or equal to the node's key.
 * The right subtree of a node contains only nodes with keys greater than or equal to the node's key.
 * Both the left and right subtrees must also be binary search trees.
 * 
 * For example:
 * Given BST [1,null,2,2],
 *    1
 *     \
 *      2
 *     /
 *    2
 * return [2].
 * Note: If a tree has more than one mode, you can return them in any order.
 * Follow up: Could you do that without using any extra space? (Assume that the implicit stack space incurred due to recursion does not count).
 * 
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 * 
 * @param {TreeNode} root
 * @return {number[]}
 * 
 * URL:
 * https://leetcode.com/problems/find-mode-in-binary-search-tree/description/
 */
var findMode = function(root) {
  if (root === null) return [];

  let ret, prevValue, currentCount;
  let maxCount = Number.MIN_VALUE;

  const traversal = (root, func) => {
    if (root === null) return root;
    traversal(root.left, func);
    func(root.val);
    traversal(root.right, func);
  };
  
  traversal(root, (val) => {
    if (prevValue === undefined) {
      prevValue = val;
      currentCount  = 1;
    } else {
      (prevValue === val) ? currentCount++ : currentCount = 1;
    }

    if (currentCount > maxCount) {
      ret = [];
      ret.push(val);
      maxCount = currentCount;
    } else if (currentCount === maxCount) ret.push(val);
    prevValue = val;
  });
  
  return ret;
};
