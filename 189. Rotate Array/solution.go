func rotate(nums []int, k int)  {
	n := len(nums)
	k = k % n
	t := make([]int, k)
	copy(t, nums[n - k:])
	copy(nums[k:], nums[:n-k])
	copy(nums, t)
}