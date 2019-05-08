func maxProfit(prices []int) int {
	min, profit := 0, 0
	for i, price := range prices {
		if i == 0 {
			min = price
			continue
		}

		if diff := price - min; diff > profit {
			profit = diff
		}
		if price < min {
			min = price
		}
	}
	return profit
}