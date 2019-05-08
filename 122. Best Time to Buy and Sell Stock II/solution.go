func maxProfit(prices []int) int {
	profit := 0
	for s := 0; s < len(prices)-1; s++ {
		delta := prices[s+1] - prices[s]
		if delta > 0 {
			profit += delta
		}
	}

	return profit
}