/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func sumOfLeftLeaves(root *TreeNode) int {
	ret := 0
	stack := []*TreeNode{}
	for root != nil || len(stack) > 0 {
		if root == nil {
			ln := len(stack) - 1
			root = stack[ln]
			stack = stack[:ln]
		} else {
			if root.Left != nil {
				if root.Left.Left == nil && root.Left.Right == nil {
					ret += root.Left.Val
					root = root.Right
				} else {
					stack = append(stack, root.Right)
					root = root.Left
				}
			} else {
				root = root.Right
			}
		}
	}
	return ret
}