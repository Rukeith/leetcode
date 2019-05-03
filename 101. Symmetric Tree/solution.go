/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func isSymmetric(root *TreeNode) bool {
	if root == nil {
		return true
	}
	return isSame(root.Left, root.Right)
}

func isSame(parent1, parent2 *TreeNode) bool {
	switch {
	case parent1 == nil && parent2 == nil:
		return true
	case parent1 == nil && parent2 != nil, parent1 != nil && parent2 == nil, parent1.Val != parent2.Val:
		return false
	default:
		return isSame(parent1.Left, parent2.Right) && isSame(parent1.Right, parent2.Left)
	}
}