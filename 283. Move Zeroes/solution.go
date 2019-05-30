func moveZeroes(nums []int) {
	current_idx := 0

	for _, v := range nums {
		if v != 0 {
			nums[current_idx] = v
			current_idx += 1
		}
	}

	for current_idx < len(nums) {
		nums[current_idx] = 0
		current_idx += 1
	}
}