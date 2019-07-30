func minMoves(nums []int) int {
	m1 := nums[0]
	m2 := nums[0]
	for i := 1; i < len(nums); i++ {
		if nums[i] < m1 {
			m1 = nums[i]
		}
		if nums[i] > m2 {
			m2 = nums[i]
		}
	}

	ans := m2 - m1
	meet := 0
	for i := 0; i < len(nums); i++ {
		if nums[i] != m1 {
			if nums[i] == m2 {
				if meet == 0 {
					meet++
					continue
				} else {
					ans += (nums[i] - m1)
				}
			} else {
				ans += (nums[i] - m1)
			}
		}
	}

	return ans
}