func distributeCandies(candies []int) int {
	m := [200001]bool{}
	kinds := 0
	bound := len(candies) / 2

	for _, num := range candies {
		if m[num+100000] {
			continue
		}

		m[num+100000] = true
		kinds++

		if kinds > bound {
			return bound
		}
	}

	return kinds
}