func arrangeCoins(n int) int {
	stair := 1
	for n >= stair {
		n -= stair
		stair++
	}
	return stair - 1
}