/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */

import "strconv"

func tree2str(t *TreeNode) string {
	if t == nil {
		return ""
	}
	if t.Left == nil && t.Right == nil {
		return strconv.Itoa(t.Val)
	}
	if t.Left != nil && t.Right == nil {
		return strconv.Itoa(t.Val) + "(" + tree2str(t.Left) + ")"
	}

	if t.Left == nil && t.Right != nil {
		return strconv.Itoa(t.Val) + "()" + "(" + tree2str(t.Right) + ")"
	}

	return strconv.Itoa(t.Val) + "(" + tree2str(t.Left) + ")(" + tree2str(t.Right) + ")"
}