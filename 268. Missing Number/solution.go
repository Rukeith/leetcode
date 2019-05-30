func missingNumber(nums []int) int {
	i := 0

	for i < len(nums) {
		if nums[i] < i {
			n := nums[i]
			nums[n], nums[i] = nums[i], nums[n]
		} else {
			i++
		}
	}

	for i := 0; i < len(nums); i++ {
		if i != nums[i] {
			return i
		}
	}

	return i
}