/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
import "math"

func getMinimumDifference(root *TreeNode) int {
	prev := -1
	min := math.MaxInt64
	var dfs func(root *TreeNode)
	dfs = func(root *TreeNode) {
		if root != nil {
			dfs(root.Left)
			if prev != -1 && min > root.Val-prev {
				min = root.Val - prev
			}
			prev = root.Val
			dfs(root.Right)
		}
	}

	dfs(root)
	return min
}