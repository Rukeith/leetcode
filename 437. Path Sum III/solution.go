/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func pathSum(root *TreeNode, sum int) int {
	m := make(map[int]int, 0)
	m[0] = 1
	return helper(root, 0, sum, m)
}

func helper(root *TreeNode, curSum, sum int, m map[int]int) int{
	if root == nil {
			return 0
	}
	curSum += root.Val
	total := 0
	if val, ok := m[curSum - sum]; ok {
			total = val
	}
	m[curSum] = m[curSum] + 1
	total += helper(root.Left, curSum, sum , m) + helper(root.Right, curSum, sum , m)
	m[curSum] = m[curSum] -1
	
	return total
}