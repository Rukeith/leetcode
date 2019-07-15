func intersect(nums1 []int, nums2 []int) []int {
	if len(nums1) == 0 || len(nums2) == 0 {
		return []int{}
	}

	if len(nums1) > len(nums2) {
		return intersect(nums2, nums1)
	}

	iMap := make(map[int]int)
	for _, v := range nums1 {
		iMap[v] += 1
	}

	r := []int{}
	for _, v := range nums2 {
		if iMap[v] > 0 {
			r = append(r, v)
			iMap[v] -= 1
		}
	}

	return r
}