func findLHS(nums []int) int {
	m := make(map[int]int, len(nums))
	for _, v := range nums {
		m[v]++
	}

	max := 0
	for i, c1 := range m {
		if c2, ok := m[i+1]; ok {
			t := c1 + c2
			if max < t {
				max = t
			}
		}
	}
	return max
}