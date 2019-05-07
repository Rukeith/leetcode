/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func sortedArrayToBST(nums []int) *TreeNode {
	root := helper(nums, 0, len(nums)-1)
	return root
}

func helper(nums []int, start, end int) *TreeNode {
	if start > end {
		return nil
	}
	mid := (start + end) / 2
	val := nums[mid]
	node := &TreeNode{Val: val, Left: nil, Right: nil}
	node.Left = helper(nums, start, mid-1)
	node.Right = helper(nums, mid+1, end)
	return node
}