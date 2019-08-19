func nextGreaterElement(nums1 []int, nums2 []int) []int {
	var mp = make(map[int]int)
	var ans []int
	for i := 0; i < len(nums2); i++ {
		mp[nums2[i]] = i
	}

	for i := 0; i < len(nums1); i++ {
		key := mp[nums1[i]]
		for j := key; j < len(nums2); j++ {
			if nums2[j] > nums1[i] {
				ans = append(ans, nums2[j])
				break
			}
			if j == len(nums2)-1 {
				ans = append(ans, -1)
			}
		}
	}

	return ans
}