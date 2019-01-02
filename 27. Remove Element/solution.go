func removeElement(nums []int, val int) int {
	n := len(nums)

	for i := 0; i < n; i++ {
		if nums[i] == val {
			nums[i], nums[n-1] = nums[n-1], nums[i]
			n--
			i--
		}
	}

	return n
}