import "strconv"

/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func binaryTreePaths(root *TreeNode) []string {
	ret := make([]string, 0, 0)
	cur := make([]byte, 0, 0)
	return treeRecursion(root, ret, cur)
}

func treeRecursion(root *TreeNode, ret []string, cur []byte) []string {
	if root == nil {
		if len(cur) != 0 {
			ret = append(ret, string(cur))
		}
		return ret
	}
	if len(cur) != 0 {
		cur = append(cur, []byte("->")...)
	}
	cur = append(cur, []byte(strconv.Itoa(root.Val))...)
	if root.Left == nil && root.Right == nil {
		ret = append(ret, string(cur))
		return ret
	}
	if root.Left != nil {
		ret = treeRecursion(root.Left, ret, cur)
	}
	if root.Right != nil {
		ret = treeRecursion(root.Right, ret, cur)
	}
	return ret
}