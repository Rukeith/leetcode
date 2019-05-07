/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func isBalanced(root *TreeNode) bool {
	if root == nil {
		return true
	}
	leftH := treeDepth(root.Left)
	rightH := treeDepth(root.Right)

	rootH := false
	if leftH >= rightH {
		rootH = leftH-rightH <= 1
	} else {
		rootH = rightH-leftH <= 1
	}

	return rootH && isBalanced(root.Left) && isBalanced(root.Right)
}

func treeDepth(root *TreeNode) int {
	if root == nil {
		return 0
	}

	leftH := treeDepth(root.Left)
	rigthH := treeDepth(root.Right)
	if leftH < rigthH {
		return rigthH + 1
	} else {
		return leftH + 1
	}
}
