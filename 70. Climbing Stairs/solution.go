func climbStairs(n int) int {
	steps := []int{1, 1}
	for i := 2; i <= n; i++ {
		steps = append(steps, steps[i-1]+steps[i-2])
	}
	return steps[n]
}

// func climbStairs(n int) int {
// 	switch n {
// 	case 0:
// 		return 0
// 	case 1:
// 		return 1
// 	case 2:
// 		return 2
// 	default:
// 		return climbStairs(n-1) + climbStairs(n-2)
// 	}
// }