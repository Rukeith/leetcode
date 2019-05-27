func containsDuplicate(nums []int) bool {
	if len(nums) <= 1 {
		return false
	}
	
	sort.Ints(nums)
	for i := 1; i < len(nums); i++ {
		if nums[i] == nums[i-1] {
			return true
		}
	}
	
	return false
}