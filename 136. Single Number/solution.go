func singleNumber(nums []int) int {
	a := 0
	for i := range nums {
		a ^= nums[i]
	}
	return a
}