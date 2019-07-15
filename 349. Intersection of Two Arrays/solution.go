func intersection(nums1 []int, nums2 []int) []int {
	s := []int{}

	if len(nums1) != 0 && len(nums2) != 0 {
		m := make(map[int]bool)

		for _, v := range nums1 {
			if _, ok := m[v]; !ok {
				m[v] = false
			}
		}

		for _, v := range nums2 {
			if b, ok := m[v]; ok && b == false {
				m[v] = true
				s = append(s, v)
			}
		}
	}
	return s
}