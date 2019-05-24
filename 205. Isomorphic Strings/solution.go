func isIsomorphic(s string, t string) bool {
	m1 := make([]int, 128)
	m2 := make([]int, 128)
	n := len(s)

	for i := 0; i < n; i++ {
		if m1[s[i]] != m2[t[i]] {
			return false
		}
		m1[s[i]] = i + 1
		m2[t[i]] = i + 1
	}

	return true

}