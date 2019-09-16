/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func isSubtree(s *TreeNode, t *TreeNode) bool {
	if t == nil {
		return true
	}

	if s == nil {
		return false
	}

	if s.Val == t.Val {
		if isIdentical(s, t) {
			return true
		}
	}

	return isSubtree(s.Left, t) || isSubtree(s.Right, t)
}

func isIdentical(s *TreeNode, t *TreeNode) bool {
	if t == nil && s == nil {
		return true
	}

	if t == nil || s == nil {
		return false
	}

	if s.Val != t.Val {
		return false
	}

	return isIdentical(s.Left, t.Left) && isIdentical(s.Right, t.Right)
}