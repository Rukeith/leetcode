func arrangeCoins(n int) int {
	k := 1
	for n >= k {
		n -= k
		k++
	}
	return k - 1
}