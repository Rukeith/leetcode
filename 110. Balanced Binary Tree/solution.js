/**
 * 110. Balanced Binary Tree
 * Given a binary tree, determine if it is height-balanced.
 * For this problem, a height-balanced binary tree is defined as:
 * a binary tree in which the depth of the two subtrees of every node never differ by more than 1.
 * 
 * Example 1:
 * Given the following tree [3,9,20,null,null,15,7]:
 *     3
 *    / \
 *   9  20
 *     /  \
 *    15   7
 * Return true.
 * 
 * Example 2:
 * Given the following tree [1,2,2,3,3,null,null,4,4]:
 *        1
 *       / \
 *      2   2
 *     / \
 *    3   3
 *   / \
 *  4   4
 * Return false.
 * 
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 * 
 * @param {TreeNode} root
 * @return {boolean}
 * 
 * URL:
 * https://leetcode.com/problems/balanced-binary-tree/description/
 */
var isBalanced = function(root) {
	if (root === null) return true;
	const check = (node, d) => {
		if (node === null) return d;
		const left = check(node.left, d + 1);
		const right = check(node.right, d + 1);
		if (left === -1 || right === -1 || Math.abs(left - right) > 1) return -1;
		return Math.max(left, right);
	}
	return check(root, 0) !== -1;
};