/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func accumulate(root *TreeNode, in int) (*TreeNode, int) {
	if root == nil {
		return nil, in
	}

	var out int
	new_root := &TreeNode{}
	new_root.Right, out = accumulate(root.Right, in)
	new_root.Val = root.Val + out
	new_root.Left, out = accumulate(root.Left, new_root.Val)

	return new_root, out
}

func convertBST(root *TreeNode) *TreeNode {
	n, _ := accumulate(root, 0)
	return n
}