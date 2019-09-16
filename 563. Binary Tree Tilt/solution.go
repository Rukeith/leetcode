/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func findTilt(root *TreeNode) int {
	totalTilt := 0

	var treeSum func(*TreeNode) int
	treeSum = func(n *TreeNode) int {
		if n == nil {
			return 0
		}

		l, r := treeSum(n.Right), treeSum(n.Left)
		tilt := l - r
		tilt += tilt >> 64 * 2 * tilt
		totalTilt += tilt
		return l + r + n.Val
	}

	treeSum(root)
	return totalTilt
}