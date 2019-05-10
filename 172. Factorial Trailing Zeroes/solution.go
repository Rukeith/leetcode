func trailingZeroes(n int) int {
	var ret int = 0
	for ; n > 0; n = n / 5 {
		ret += n / 5
	}
	return ret
}