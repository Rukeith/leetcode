/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func bfs(s *[][]int, level int, root *TreeNode) {
	if root == nil {
		return
	}
	if level >= len(*s) {
		*s = append(*s, []int{})
	}
	(*s)[level] = append((*s)[level], root.Val)
	bfs(s, level+1, root.Left)
	bfs(s, level+1, root.Right)
}

func levelOrderBottom(root *TreeNode) [][]int {
	var s [][]int
	bfs(&s, 0, root)
	for i := 0; i < len(s)/2; i++ {
		s[i], s[len(s)-i-1] = s[len(s)-i-1], s[i]
	}
	return s
}