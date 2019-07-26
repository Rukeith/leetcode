/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */

func sumStartAt(root *TreeNode, sum int, count *int) {
	if root == nil {
		return
	}
	if sum == root.Val {
		*count += 1
	}
	sumStartAt(root.Left, sum-root.Val, count)
	sumStartAt(root.Right, sum-root.Val, count)
}

func traverseAllNode(root *TreeNode, sum int, count *int) {
	if root == nil {
		return
	}

	sumStartAt(root, sum, count)
	traverseAllNode(root.Left, sum, count)
	traverseAllNode(root.Right, sum, count)
}

func pathSum(root *TreeNode, sum int) int {
	count := 0
	traverseAllNode(root, sum, &count)
	return count
}