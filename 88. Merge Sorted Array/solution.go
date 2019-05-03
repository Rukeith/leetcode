func merge(nums1 []int, m int, nums2 []int, n int) {
	nums1 = nums1[:m]
	nums1 = append(nums1, nums2[:n]...)
	ol := len(nums1)/2 + (len(nums1) / 2)
	nl := len(nums1)

	for k := 0; k < ol; k++ {
		for i, n := range nums1 {
			if i+1 < nl && n > nums1[i+1] {
				nums1[i], nums1[i+1] = nums1[i+1], n
			}
		}
	}
}