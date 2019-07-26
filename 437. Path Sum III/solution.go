/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func pathSum(root *TreeNode, sum int) int {
	count := 0
	sumsMap := make(map[int]int)
	sumsMap[0] = 1
	traverse(&count, root, 0, sumsMap, sum)
	return count
}

func traverse(count *int, currNode *TreeNode, currSum int, sums map[int]int, sum int) {
	if currNode == nil {
		return
	}

	currSum += currNode.Val
	if c, okay := sums[currSum-sum]; okay {
		*count += c
	}

	if _, okay := sums[currSum]; okay {
		sums[currSum]++
	} else {
		sums[currSum] = 1
	}

	traverse(count, currNode.Left, currSum, sums, sum)
	traverse(count, currNode.Right, currSum, sums, sum)

	sums[currSum]--
}
