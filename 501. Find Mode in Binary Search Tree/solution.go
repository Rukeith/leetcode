/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func findMode(root *TreeNode) []int {
	stack := []*TreeNode{}
	max := 0
	count := 0
	var prev *TreeNode = nil
	result := make([]int, 0)

	for root != nil || len(stack) > 0 {
		for root != nil {
			stack = append(stack, root)
			root = root.Left
		}

		root = stack[len(stack)-1]
		stack = stack[:len(stack)-1]

		if prev != nil && root.Val == prev.Val {
			count++

			if count > max {
				result = result[:0]
				result = append(result, root.Val)
				max = count
			} else if count == max {
				result = append(result, root.Val)
			}
		} else {
			count = 1

			if count > max {
				max = count
				result = append(result, root.Val)
			} else if count == max {
				result = append(result, root.Val)
			}
		}

		prev = root
		root = root.Right
	}

	return result
}