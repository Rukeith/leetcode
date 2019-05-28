func containsNearbyDuplicate(nums []int, k int) bool {
	exist := make(map[int]int, len(nums))
	for i, v := range nums {
		if pos, ok := exist[v]; ok && i-pos <= k {
			return true
		}
		exist[v] = i
	}
	return false
}