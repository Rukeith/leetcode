/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func diameterOfBinaryTree(root *TreeNode) int {
	maxLen := make([]int, 1)
	helper(root, maxLen)
	return maxLen[0]
}

func helper(root *TreeNode, maxLen []int) int {
	if root == nil {
		return 0
	}

	left := helper(root.Left, maxLen)
	right := helper(root.Right, maxLen)
	maxLen[0] = max(maxLen[0], left+right)
	return max(left, right) + 1
}

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}